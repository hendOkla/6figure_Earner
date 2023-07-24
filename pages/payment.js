import React   from 'react'; 
import { loadStripe } from '@stripe/react-stripe-js';



const payment =()=>{
  // for first method
/*   const data = {
    card_number: '4000056655665556',
    exp_month: '12',
    exp_year: '2024',
    cvc: '545',
    amount: '9.9',
    currency: 'usd',
    description: 'Test Payment',
};

  React.useEffect(() => {

    axios.post(`/api/session`).then(res=>{
        if(res.data.status ===201){
            console.log(res.data.message);
            
        }else if(res.data.status === 400){
          console.log(res.data.response);   
        }else if(res.data.status === 500){
          console.log(res.data.response);   
        }
      });
     
    });
 */


    // for second method
 /*   
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);


  const handleToken = async (token) => {
    setLoading(true);
    axios.post(`/api/payment`,token).then(res=>{
      console.log(res.data.status);      
    });    
  };*/


  const amount = 1000; // Replace with the actual amount from the form input

  async function myFunction() {
    const result = await stripe.createToken({
      name: name,
      address_line1: 'addressLine1',
      address_city: 'addressCity',
      address_state: 'addressState',
      address_country: 'addressCountry',
      address_zip: '12345',
      amount: '998',
      currency: 'usd',
    });

    const token = result.token.id;
    const response = await fetch('/api/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
        amount: amount,
      }),
    });


  }

  React.useEffect(() => {
    myFunction();     
  });


 


  

// for second method
/*   return (
    <>


      <StripeCheckout
        stripeKey={'pk_live_51NGPEkD9XEKkDfrerMRBkZulRw0Nk2adtRLlz9PLvJMCEcs58yREEkGGFtfSsTgRqG5jC8zJAmU7Xmffhyu4lfqi00QpD9FVQe'}
        token={handleToken}
        amount={10000} // $100
        currency="USD"
        name="My App"
        description="Purchase"
        disabled={loading}
      >
        <button disabled={loading}>
          {loading ? 'Processing Payment...' : 'Submit Payment'}
        </button>
      </StripeCheckout>
    </>
  ); */

  return(
  <h1>payment way</h1>
  );

   
    
}


export default payment