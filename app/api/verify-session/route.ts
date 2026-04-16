import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY;

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.json({ paid: false, error: "missing_session" }, { status: 400 });
  }
  if (!stripeSecret) {
    return NextResponse.json({ paid: false, error: "stripe_env" }, { status: 500 });
  }

  const stripe = new Stripe(stripeSecret);
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid = session.payment_status === "paid";
    return NextResponse.json({
      paid,
      amountTotal: session.amount_total,
      currency: session.currency,
    });
  } catch {
    return NextResponse.json({ paid: false, error: "retrieve_failed" }, { status: 400 });
  }
}
