import { Client, resources } from 'coinbase-commerce-node';

Client.init(String(process.env.COINBASE_API));
const { Charge } = resources;

const coinInitRoute = async(req, res) => {

  const { id } = req.body

  const product = products.find(product => product.id === id)

  try {

    const chargeData = {
      name: 'Pro',
      description: "test",
      pricing_type: "fixed_price",
      local_price: {
        amount: 25,
        currency: 'USD',
      },

      redirect_url: '6figure-earner.world/pay?success=true',
      cancel_url:'6figure-earner.world/pay?canceled=true',
      
    };

    const charge = await Charge.create(chargeData);

    res.send(charge);

  } catch (e) {
    res.status(500).send({ error:e });
  }

}

export default coinInitRoute