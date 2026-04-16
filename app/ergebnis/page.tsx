import { ErgebnisClient } from "@/components/ErgebnisClient";
import { Suspense } from "react";

export default function ErgebnisPage() {
  return (
    <Suspense
      fallback={<p className="py-12 text-center text-muted">Ergebnis wird geladen…</p>}
    >
      <ErgebnisClient />
    </Suspense>
  );
}
