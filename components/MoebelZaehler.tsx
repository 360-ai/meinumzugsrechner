"use client";

type Props = {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
};

export function MoebelZaehler({
  label,
  value,
  onChange,
  min = 0,
  max = 999,
}: Props) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2">
      <span className="text-sm font-medium text-slate-800">{label}</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={dec}
          className="touch-target flex items-center justify-center rounded-md border border-slate-300 px-3 text-lg font-semibold hover:bg-slate-50"
          aria-label={`${label} verringern`}
        >
          −
        </button>
        <span className="min-w-[2rem] text-center tabular-nums">{value}</span>
        <button
          type="button"
          onClick={inc}
          className="touch-target flex items-center justify-center rounded-md bg-accent px-3 text-lg font-semibold text-white hover:opacity-95"
          aria-label={`${label} erhöhen`}
        >
          +
        </button>
      </div>
    </div>
  );
}
