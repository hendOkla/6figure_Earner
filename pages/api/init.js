import { Client, resources } from 'coinbase-commerce-node';

Client.init(String(process.env.COINBASE_API));
const { Charge } = resources;

const coinInitRoute = async(req, res) => {

  const { paymentData } = req.body


  try {

    const chargeData = {
      name: paymentData.ProductName,
      description: paymentData.Description,
      pricing_type: "fixed_price",
      local_price: {
        amount: paymentData.price,
        currency: 'USD',
      },

    };

    const charge = await Charge.create(chargeData);

    res.send(charge);

  } catch (e) {
    res.status(500).send({ error:e });
  }

}

export default coinInitRoute