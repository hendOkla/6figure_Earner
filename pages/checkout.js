import React , { useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import { useRouter } from 'next/router';

 
const Checkout = () => {
    const router = useRouter();
    const { type } = router.query;


    useEffect(()=>{
        console.log(type)
    },[type]);


    
    return (
        <>
           <>
            <Navbar />
            

            <PageBanner pageTitle="Checkout" />
            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form"  style={{ maxWidth: '100%' }}>
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <img src="/images/logo.png" style={{width:'350px'}}/>
                            </Link>
                        </div>
                        <form >
                            <div className='row mb-4'>                                  
                                <div className='col-lg-7 col-md-7 mb-4' style={{padding:'40px 30px'}}> 
                                    <div className='row mb-4' style={{textAlign:'center',boxShadow:'0px 0px 10px #eee', border:'1px solid #edf2f9' , padding:'40px 20px', borderRadius:'10px'}}>
                                        <div className='row' style={{fontSize:'2rem', color:'white', paddingBottom:'5px'}}> Customer Info</div>
                                        <hr style={{color:'white', border:'1px solid #edf2f9', boxShadow:'0px 0px 10px #eee'}}></hr>
                                        <div className="row mb-4">
                                            <div className="col-lg-4 col-md-4">
                                                <label className="form-label">Fist name</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    name="username" 
                                                    
                                                />
                                                <span className='span span-reg'></span>
                                            </div>                                                               
                                            <div className="col-lg-4 col-md-4">
                                                <label className="form-label">Last name</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    name="username" 
                                                    
                                                />
                                                <span className='span span-reg'></span>
                                            </div>                                                               
                                            <div className="col-lg-4 col-md-4">
                                                <label className="form-label">Email</label>
                                                <input type="email" 
                                                    className="form-control" 
                                                    name="username" 
                                                    
                                                />
                                                <span className='span span-reg'></span>
                                            </div>                                                               
                                        </div>                        
                                        <div className="row mb-4">
                                            <div className="col-lg-8 col-md-8">
                                                <label className="form-label">Address</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    name="username" 
                                                    
                                                />
                                                <span className='span span-reg'></span>
                                            </div>                                                               
                                            <div className="col-lg-4 col-md-4">
                                                <label className="form-label">Select country</label>
                                                <select className="form-control">
                                                    <option>KSA</option>
                                                    <option>UAE</option>
                                                    <option>US</option>
                                                    <option>UK</option>
                                                </select>
                                                <span className='span span-reg'></span>
                                            </div>                                                               
                                        
                                                                                                    
                                        </div>                        
                                        <div className="row mb-4">
                                            <div className="col-lg-4 col-md-4">
                                                <label className="form-label">Town/City</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    name="username" 
                                                    
                                                />
                                                <span className='span span-reg'></span>
                                            </div>                                                               
                                            <div className="col-lg-4 col-md-4">
                                                <label className="form-label">Country State</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    name="username" 
                                                    
                                                />
                                                <span className='span span-reg'></span>
                                            </div>                                                               
                                            <div className="col-lg-4 col-md-4">
                                                <label className="form-label">Zip/Postal</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    name="username" 
                                                    
                                                />
                                                <span className='span span-reg'></span>
                                            </div>                                                               
                                        
                                                                                                    
                                        </div>
                                    </div>                    
                                    <div className='row mb-4' style={{textAlign:'center',boxShadow:'0px 0px 10px #eee', border:'1px solid #edf2f9' , padding:'40px 20px', borderRadius:'10px'}}>
                                        <div className='row' style={{fontSize:'2rem', color:'white', paddingBottom:'5px'}}> Payment Info</div>
                                        <hr style={{color:'white', border:'1px solid #edf2f9', boxShadow:'0px 0px 10px #eee'}}></hr>
                                        <div className="row mb-4">
                                            <div className="col-lg-6 col-md-6">
                                                <label className="form-label">Credit card number</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    name="username" 
                                                    
                                                />
                                                <span className='span span-reg'></span>
                                            </div>                                                               
                                            <div className="col-lg-6 col-md-5">
                                                <label className="form-label">Billing Zip</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    name="username" 
                                                    
                                                />
                                                <span className='span span-reg'></span>
                                            </div>                                                             
                                        </div>                        
                                        <div className="row mb-4">
                                            <div className="col-lg-4 col-md-4">
                                                <label className="form-label">Month</label>
                                                <select className="form-control">
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                    <option>04</option>
                                                    <option>05</option>
                                                    <option>06</option>
                                                    <option>07</option>
                                                    <option>08</option>
                                                    <option>09</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                </select>
                                                <span className='span span-reg'></span>
                                            </div>                                                               
                                            <div className="col-lg-4 col-md-4">
                                                <label className="form-label">Year</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    name="username" 
                                                    
                                                />
                                                <span className='span span-reg'></span>
                                            </div>                                                               
                                            <div className="col-lg-4 col-md-4">
                                                <label className="form-label">CVC</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    name="username" 
                                                    
                                                />
                                                <span className='span span-reg'></span>
                                            </div>                                                               
                                        
                                                                                                    
                                        </div>
                                    </div>                    
                                </div>                       
                                <div className='col-lg-5 col-md-5' style={{padding:'40px 30px'}}> 
                                    <div className='row mb-4' style={{textAlign:'center',boxShadow:'0px 0px 10px #eee', border:'1px solid #edf2f9' , padding:'40px 20px', borderRadius:'10px'}}>
                                        <div className='row' style={{fontSize:'2rem', color:'white', paddingBottom:'5px'}}> Current Cart</div>
                                        <hr style={{color:'white', border:'1px solid #edf2f9', boxShadow:'0px 0px 10px #eee'}}></hr>
                                        <div className='row mb-4'>
                                            <div className="col-lg-6 col-md-4">
                                                    <label className="form-label">ProductName</label>
                                            </div> 
                                            <div className="col-lg-6 col-md-4">
                                                    <label className="form-label" style={{color:'#ff7703',  fontWeight:'bold', fontSize:'1.2rem'}}>{ type }</label>
                                            </div> 
                                        </div>
                                        <div className='row mb-4'>
                                            <div className="col-lg-6 col-md-4">
                                                    <label className="form-label">Price</label>
                                            </div> 
                                            <div className="col-lg-6 col-md-4">
                                                    <label className="form-label" style={{color:'#ff7703',  fontWeight:'bold', fontSize:'1.2rem'}}>{ (type=='Pro')?'600':'350' } $</label>
                                            </div> 
                                        </div>

                                        <hr className='' style={{color:'white', border:'1px solid #edf2f9', boxShadow:'0px 0px 10px #eee'}}></hr>

                                        <div className='row'>
                                            <button type="submit" className="btn btn-primary">Pay</button>
                                        </div>
                                        
                                       
                                    </div>                    
                                </div>                            
                            </div>



                            
                        </form>
                        <div className="foot">
                            <p>  <Link href="/login"> </Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
        </>
    )
}

export default Checkout;