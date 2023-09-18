import { Client, resources } from 'coinbase-commerce-node';

Client.init(String(process.env.COINBASE_API));
const { Charge } = resources;

const coinInitRoute = async(req, res) => {

  const { id } = req.body


  try {

    const chargeData = {
      name: 'Pro',
      description: "test",
      pricing_type: "fixed_price",
      local_price: {
        amount: 25,
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