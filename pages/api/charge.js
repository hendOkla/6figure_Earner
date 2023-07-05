const stripe = require('stripe')('sk_test_51NGPEkD9XEKkDfre8Bh4W29JPlkYgMojXGiugvHZ3aANyky3VZzfCkx9Ad0aezcV1MPoNmdly8MDRg9VltkLk3ve00WRqTL2ji');

export default async function handler(req, res) {
  const { amount, name , id  } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      description: name,
      payment_method: id,
      confirm: true
    });

    return res.status(200).json({ success: true ,amount:amount,plan:name});
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message ,amount:amount,plan:name});
  }
}