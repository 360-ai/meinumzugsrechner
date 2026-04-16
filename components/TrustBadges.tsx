export function TrustBadges() {
  const items = [
    "Keine Datenweitergabe an Umzugsfirmen",
    "SSL-verschlüsselt (HTTPS)",
    "Ohne Anmeldung",
  ];
  return (
    <ul className="mt-6 flex flex-wrap gap-3 text-xs text-muted">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-900"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
