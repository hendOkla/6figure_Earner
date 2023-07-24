import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function Checkout() {
  const [product] = useState({
    name: 'Test Product',
    price: 10.00
  });

  const handleToken = async (token) => {
    const response = await fetch('/api/charge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: product.price * 100,
        id: token.id
      })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Payment Successful');
    } else {
      console.log('Payment Error:', data.error);
    }
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <h2>${product.price.toFixed(2)}</h2>
      <StripeCheckout
        stripeKey={'pk_live_51NGPEkD9XEKkDfrerMRBkZulRw0Nk2adtRLlz9PLvJMCEcs58yREEkGGFtfSsTgRqG5jC8zJAmU7Xmffhyu4lfqi00QpD9FVQe'}
        token={handleToken}
        billingAddress
        shippingAddress
        amount={product.price * 100}
        name={product.name}
      />
    </div>
  );
}