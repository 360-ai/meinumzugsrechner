"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ZahlungPage() {
  const router = useRouter();
  const [msg, setMsg] = useState("Zahlung wird vorbereitet…");
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/create-checkout-session", { method: "POST" });
        const data = await res.json();
        if (!res.ok) {
          setErr(data.error ?? "Stripe nicht erreichbar.");
          return;
        }
        if (data.url && !cancelled) {
          setMsg("Weiterleitung zu Stripe…");
          router.replace(data.url);
        }
      } catch {
        if (!cancelled) setErr("Netzwerkfehler.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [router]);

  if (err) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <p className="font-medium text-red-900">{err}</p>
        <p className="mt-2 text-sm text-red-800">
          Für lokale Entwicklung: <code className="rounded bg-red-100 px-1">STRIPE_SECRET_KEY</code> in{" "}
          <code className="rounded bg-red-100 px-1">.env.local</code> setzen (siehe .env.example).
        </p>
        <Link href="/rechner?step=6" className="mt-4 inline-block text-accent underline">
          Zurück zum Rechner
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 text-center">
      <p className="text-lg font-medium text-primary">{msg}</p>
      <p className="mt-2 text-sm text-muted">Sichere Zahlung über Stripe Checkout</p>
    </div>
  );
}
