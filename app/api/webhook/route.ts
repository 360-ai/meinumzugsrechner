import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  if (!stripeSecret || !webhookSecret) {
    return NextResponse.json({ received: false }, { status: 200 });
  }

  const stripe = new Stripe(stripeSecret);
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Webhook signature failed" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      // Buchhaltung / externes System: hier nur bestätigen — keine Umzugsdaten speichern.
      break;
    default:
      break;
  }

  return NextResponse.json({ received: true });
}

export const dynamic = "force-dynamic";
