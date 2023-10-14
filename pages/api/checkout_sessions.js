
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {

  
const { email , amount } = req.body;

    if (req.method === 'POST') {
      try {
         const { email, amount } = req.body;
          let productName;
          if (amount === 350) {
            productName = 'standard';
          } else {
            productName = 'pro';
          }


      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        customer_email: 'eng.hendokla@gmail.com',
        submit_type: 'pay',
        billing_address_collection: 'auto',
        shipping_address_collection: {
        },
        
        line_items: [
          {
            price_data: {
              currency: 'USD',             
              product_data: {
                name: productName,
              },
              unit_amount_decimal: parseInt(amount*100),
            },
            quantity: 1,
          },
        ],
        payment_method_types:['card'],
        mode: 'payment',
        allow_promotion_codes: true,
        success_url: `${req.headers.origin}/pay?success=true`,
        cancel_url: `${req.headers.origin}/pay?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }

      
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }




}