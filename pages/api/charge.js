const stripe = require('stripe')('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');

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