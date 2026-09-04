export function MetricCard({
  value,
  unit,
  label,
}: {
  value: string;
  unit?: string;
  label: string;
}) {
  return (
    <div className="metric">
      <div className="metric-value">
        {value}
        <span>{unit}</span>
      </div>
      <p>{label}</p>
    </div>
  );
}
