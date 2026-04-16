import { RechnerForm } from "@/components/RechnerForm";
import { Suspense } from "react";

export default function RechnerPage() {
  return (
    <Suspense
      fallback={<p className="py-12 text-center text-muted">Formular wird geladen…</p>}
    >
      <RechnerForm />
    </Suspense>
  );
}
