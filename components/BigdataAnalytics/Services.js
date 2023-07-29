import React , { useState , useEffect} from 'react';
import Link from 'next/link';
import StripeCheckout from 'react-stripe-checkout';
import swal from 'sweetalert';
import axios from 'axios';

import { checkout } from '../../checkout';



export default function Services()  {
    const [status, setStatus] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentPlan, setPaymentPlan] = useState('');


    const handleToken = async (token, amount, name) => {
        
        const response = await fetch('/api/charge', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            amount: amount,
            name: name,
            id: token.id
          })
        });
        const data = await response.json();
        if (data.success) {            
            console.log('Payment Successful');
            setStatus('true');
            setAmount(amount/100);
            setPaymentPlan(name);            
        } else {
            console.log('Payment Error:', data.error);
            setStatus('false');
            setAmount(amount/100);
            setPaymentPlan(name);
        }
    };

    useEffect(()=>{
        const username = window.localStorage.getItem('username');
        const link = localStorage.getItem('Link');



        const data={
            username:username,
            attendedBy:link,
            amount:amount,
            paymentPlan:paymentPlan,
        }


             
        
        if(status==='false'){
            swal("Failed",'Sorry, the payment was not completed correctly, please try again...',"warning");
        }else{
            axios.post(`/api/payment`,data).then(res=>{
                if(res.data.status ===200){     
                    console.log('welcom'+res.data.message);
                    swal("Success",'Ready to show videos',"success");                      
                }else if(res.data.status === 400){
                    swal("Failed",'Something went wrong, please contact support to resolve the issue...',"warning");                    
                }
            });
        }
        
    },[status]);  



    return (
        <>
            <div className="bigdata-services-area ptb-80 bg-eef6fd">
                <div className="container">
                    <div className="section-title">
                        <h2>Our special packages</h2>
                        <div className="bar"></div>
                        <p>You can choose the package that suits you and enjoy the experience with us</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table">
                                <div className="pricing-header">
                                    <h3>6FE Standard</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>2.00 <span>/Mon</span></span>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>

                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
{/*                                 <StripeCheckout
                                    stripeKey={'pk_live_51NGPEkD9XEKkDfrerMRBkZulRw0Nk2adtRLlz9PLvJMCEcs58yREEkGGFtfSsTgRqG5jC8zJAmU7Xmffhyu4lfqi00QpD9FVQe'}
                                    token={(token) => handleToken(token, 399 * 100, '6FE Standard')} 
                                    billingAddress
                                    shippingAddress
                                    amount={0.001 * 100}
                                    name={'6FE Standard'}
                                /> */}
                                <button className="btn btn-primary" onClick={(()=>{
                                    checkout({
                                        lineItems:[{
                                            price:"price_1NZARCD9XEKkDfre0sfJpY1J",
                                            
                                            quantity:1
                                        }]
                                    });
                                })}>BUY
                                    
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table">
                                <div className="pricing-header">
                                    <h3>6FE Pro</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>600.00 <span>/Mon</span></span>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>

                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                <StripeCheckout
                                    stripeKey={'pk_live_51NGPEkD9XEKkDfrerMRBkZulRw0Nk2adtRLlz9PLvJMCEcs58yREEkGGFtfSsTgRqG5jC8zJAmU7Xmffhyu4lfqi00QpD9FVQe'}
                                    token={(token) => handleToken(token, 600 * 100, '6FE Pro')} 
                                    billingAddress
                                    shippingAddress
                                    amount={600 * 100}
                                    name={'6FE Pro'}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

