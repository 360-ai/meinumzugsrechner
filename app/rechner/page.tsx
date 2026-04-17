import { RechnerForm } from "@/components/RechnerForm";
import { Suspense } from "react";

export default function RechnerPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Suspense
        fallback={<p className="py-12 text-center text-muted">Formular wird geladen…</p>}
      >
        <RechnerForm />
      </Suspense>
    </div>
  );
}
