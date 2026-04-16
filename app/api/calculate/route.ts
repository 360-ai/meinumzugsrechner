import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { calculateUmzug } from "@/lib/calculate";
import type { UmzugFormData } from "@/lib/types";

const stripeSecret = process.env.STRIPE_SECRET_KEY;

export async function POST(req: NextRequest) {
  if (!stripeSecret) {
    return NextResponse.json(
      { error: "Stripe ist nicht konfiguriert." },
      { status: 500 },
    );
  }

  let body: { sessionId?: string; formData?: UmzugFormData };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const { sessionId, formData } = body;
  if (!sessionId || !formData) {
    return NextResponse.json(
      { error: "sessionId und formData sind erforderlich." },
      { status: 400 },
    );
  }

  const stripe = new Stripe(stripeSecret);
  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return NextResponse.json({ error: "Session ungültig." }, { status: 400 });
  }

  if (session.payment_status !== "paid") {
    return NextResponse.json({ error: "Zahlung nicht bestätigt." }, { status: 402 });
  }

  try {
    const result = calculateUmzug(formData);
    return NextResponse.json({ result });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Berechnung fehlgeschlagen." }, { status: 500 });
  }
}
