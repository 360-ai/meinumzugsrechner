import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const priceId = process.env.STRIPE_PRICE_ID;
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export async function POST() {
  if (!stripeSecret) {
    return NextResponse.json(
      { error: "Stripe ist nicht konfiguriert (STRIPE_SECRET_KEY)." },
      { status: 500 },
    );
  }

  const stripe = new Stripe(stripeSecret);

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = priceId
    ? [{ price: priceId, quantity: 1 }]
    : [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Umzugskostenberechnung",
              description: "Einmalige Berechnung inkl. Ergebnis (meinumzugsrechner.de)",
            },
            unit_amount: 299,
          },
          quantity: 1,
        },
      ];

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    success_url: `${appUrl}/ergebnis?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/rechner?step=5&canceled=1`,
    metadata: {
      product: "umzug_calc",
    },
  });

  if (!session.url) {
    return NextResponse.json(
      { error: "Keine Checkout-URL von Stripe erhalten." },
      { status: 500 },
    );
  }

  return NextResponse.json({ url: session.url, id: session.id });
}
