
import { loadStripe } from '@stripe/stripe-js';

export async function checkout({lineItems}) {
  let stripePromise = null;

  const getStripe = ()=>{
    if(!stripePromise){
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
    }
    return stripePromise
  }
  const stripe = await getStripe();
  await stripe.redirectToCheckout({
    mode:'subscription',
    lineItems,
    successUrl: `${window.location.origin}/pay?session_id={CHECKOUT_SESSION_ID}&status=${encodeURIComponent('success')}`,
    cancelUrl: `${window.location.origin}/sign-up/`,
    
  });  
}