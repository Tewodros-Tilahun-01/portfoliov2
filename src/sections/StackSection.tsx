type Skill = {
  name: string;
  percent: number;
  icon: string; // using emoji placeholders to avoid new deps
};

const skills: Skill[] = [
  { name: "Python", percent: 95, icon: "🐍" },
  { name: "PostgreSQL", percent: 85, icon: "🐘" },
  { name: "Microsoft Azure", percent: 80, icon: "🅰️" },
  { name: "Cloud: AWS", percent: 75, icon: "☁️" },
];

function SkillCard({ name, percent, icon }: Skill) {
  return (
    <div className="relative rounded-3xl bg-secondary ring-1 ring-primary/40 p-6 md:p-7">
      <div className="absolute right-4 top-4 text-xs bg-tertiary text-secondary px-3 py-1 rounded-full border border-secondary/40">
        {percent}%
      </div>

      <div className="flex items-center gap-4">
        <div className="grid place-items-center size-10 rounded-xl bg-tertiary text-primary text-2xl">
          <span aria-hidden>{icon}</span>
        </div>
        <div className="text-lg md:text-base lg:text-lg font-medium text-primary">
          {name}
        </div>
      </div>

      <div className="mt-6">
        <div className="h-0.5 w-full rounded-full bg-tertiary">
          <div
            className="h-0.5 rounded-full bg-accent"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function StackSection() {
  return (
    <section className="px-2 sm:px-4 md:px-6 py-5 sm:py-12 md:py-14">
      <div className="mb-6 flex items-center gap-3">
        <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase bg-tertiary text-secondary border border-secondary/40 px-3 py-1 ">
          <span>⚙️</span>
          <span>Technical Skills</span>
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
        Technologies
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {skills.map((s) => (
          <SkillCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}

export default StackSection;
