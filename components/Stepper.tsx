type Props = {
  current: number;
  total: number;
};

export function Stepper({ current, total }: Props) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between text-sm text-muted">
        <span>
          Schritt {current} von {total}
        </span>
        <span>{Math.round((current / total) * 100)} %</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
