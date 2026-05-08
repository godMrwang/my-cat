import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "My Cat Product",
          },
          unit_amount: 1000, // $10
        },
        quantity: 1,
      },
    ],
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/cancel`,
  });

  res.json({ url: session.url });
}