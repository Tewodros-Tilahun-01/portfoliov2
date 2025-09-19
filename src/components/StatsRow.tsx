interface Stat {
  label: string;
  value: string;
  sublabel?: string;
}

const defaultStats: Stat[] = [
  { value: "96", label: "Completed", sublabel: "Projects" },
  { value: "8", label: "Years", sublabel: "of Experience" },
  { value: "10+", label: "Awards", sublabel: "Winning" },
];

function StatsRow({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl bg-neutral-900 ring-1 ring-neutral-800/80 p-6 text-center"
        >
          <div className="text-4xl font-extrabold">{s.value}</div>
          <div className="mt-2 text-sm text-neutral-300">{s.label}</div>
          {s.sublabel && (
            <div className="text-xs text-neutral-500">{s.sublabel}</div>
          )}
        </div>
      ))}
    </div>
  );
}
export default StatsRow;
