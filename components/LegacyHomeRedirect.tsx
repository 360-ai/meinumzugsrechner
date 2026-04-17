"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function LegacyHomeRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <div className="mx-auto max-w-md px-4 py-16 text-center">
      <p className="text-muted">Weiterleitung zur Startseite…</p>
      <Link href="/" className="mt-4 inline-block font-medium text-primary underline hover:no-underline">
        Zur Startseite
      </Link>
    </div>
  );
}
