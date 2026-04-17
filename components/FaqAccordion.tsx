"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl className="space-y-2">
      {items.map((item, i) => (
        <div
          key={item.question}
          className="rounded-2xl border border-slate-100 bg-[#FAFCFE] shadow-sm overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
            aria-expanded={open === i}
          >
            <dt className="font-bold text-[#0D2137] text-sm sm:text-base">{item.question}</dt>
            <span
              className="ml-4 flex-shrink-0 transition-transform duration-200"
              style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                   strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#0088CC]">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
          {open === i && (
            <dd className="px-6 pb-5 text-sm text-[#5A7A8A] leading-relaxed border-t border-slate-100 pt-3">
              {item.answer}
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}
