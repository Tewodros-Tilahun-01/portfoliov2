import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Database,
  Cloud,
  Atom,
  Wind,
  Server,
  GitBranch,
  Boxes,
  BookOpen,
  Users,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

type Skill = {
  name: string;
  percent: number;
  icon: ReactNode;
  color?: string; // hex or css color for rings/icons
};

type Language = {
  name: string;
  percent: number;
  flag: string; // emoji placeholder flag
};

// Tool stack (square items with colorful rings)
const toolStack: Skill[] = [
  {
    name: "React",
    percent: 90,
    icon: <Atom className="size-8" />,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    percent: 85,
    icon: <Server className="size-8" />,
    color: "#ffffff",
  },
  {
    name: "Tailwind",
    percent: 88,
    icon: <Wind className="size-8" />,
    color: "#38bdf8",
  },
  {
    name: "Node.js",
    percent: 82,
    icon: <Server className="size-8" />,
    color: "#6cc24a",
  },
  {
    name: "PostgreSQL",
    percent: 80,
    icon: <Database className="size-8" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    percent: 78,
    icon: <Database className="size-8" />,
    color: "#10aa50",
  },
  {
    name: "Docker",
    percent: 76,
    icon: <Boxes className="size-8" />,
    color: "#2496ed",
  },
  {
    name: "Git",
    percent: 84,
    icon: <GitBranch className="size-8" />,
    color: "#f05032",
  },
  {
    name: "AWS",
    percent: 75,
    icon: <Cloud className="size-8" />,
    color: "#ff9900",
  },
  {
    name: "Azure",
    percent: 72,
    icon: <Cloud className="size-8" />,
    color: "#0078d4",
  },
  {
    name: "Prisma",
    percent: 74,
    icon: <Boxes className="size-8" />,
    color: "#2d3748",
  },
  {
    name: "Express",
    percent: 78,
    icon: <Server className="size-8" />,
    color: "#ffffff",
  },
];

const generalSkills: Skill[] = [
  { name: "Analytical", percent: 90, icon: <BookOpen className="size-4" /> },
  { name: "Teamwork", percent: 72, icon: <Users className="size-4" /> },
  { name: "Leadership", percent: 65, icon: <Sparkles className="size-4" /> },
  { name: "Learning", percent: 82, icon: <BookOpen className="size-4" /> },
];

const languages: Language[] = [
  { name: "Amharic", percent: 100, flag: "🇪🇹" },
  { name: "English", percent: 80, flag: "🇬🇧" },
];

function CircularStat({ name, percent, icon, color }: Skill) {
  const ring = {
    background: `conic-gradient(${"#61CE78"} ${
      percent * 3.6
    }deg, transparent 0)`,
  } as const;
  return (
    <Card className="aspect-square p-0  shadow-lg">
      <div className="h-full w-full flex flex-col items-center justify-center gap-1">
        <div className="relative size-22">
          <div className="absolute inset-0 rounded-full " style={ring} />
          <div
            className="absolute inset-1 rounded-full bg-tertiary  flex flex-col justify-center items-center "
            style={{ color: color }}
          >
            {icon}
            <div className="  text-sm text-primary">{percent}%</div>
          </div>
        </div>
        <div className="text-sm text-primary sm:mt-2">{name}</div>
      </div>
    </Card>
  );
}

function SmallCircular({ name, percent, icon }: Skill) {
  const meter = {
    background: `conic-gradient(var(--accent-primary) ${
      percent * 3.6
    }deg, var(--border-secondary) 0)`,
  } as const;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative size-16 grid place-items-center">
        <div className="size-14 rounded-full" style={meter} />
        <div className="absolute size-12 rounded-full bg-tertiary grid place-items-center">
          {icon}
        </div>
      </div>
      <div className="text-xs text-secondary">{name}</div>
      <div className="text-[10px] text-tertiary">{percent}%</div>
    </div>
  );
}

function SectionBadge({ children }: { children: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 ">
      <Badge>
        <span>⚙️</span>
        <span className="text-xl uppercase">{children}</span>
      </Badge>
    </div>
  );
}

function DotsProgress({
  percent,
  total = 10,
}: {
  percent: number;
  total?: number;
}) {
  const filled = Math.floor((percent / 100) * total);
  const dots = Array.from({ length: total }, (_, i) => i < filled);
  return (
    <div className="flex items-center gap-2">
      {dots.map((isFilled, i) => (
        <span
          key={i}
          className="inline-block size-3 rounded-full"
          style={{
            backgroundColor: isFilled ? "#61CE78" : "var(--border-secondary)",
          }}
        />
      ))}
    </div>
  );
}

function LanguageRow({ name, percent, flag }: Language) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 w-full">
      <div className="flex items-center gap-4">
        <div className="grid place-items-center size-10 rounded-xl  text-lg">
          <span aria-hidden>{flag}</span>
        </div>
        <div className="text-primary">{name}</div>
      </div>
      <div className="flex items-center md:gap-2">
        <DotsProgress percent={percent} />
        <div className="w-10 text-right text-secondary text-sm">{percent}%</div>
      </div>
    </div>
  );
}

function StackSection() {
  return (
    <section className="px-2 sm:px-4 md:px-6 py-2 sm:py-8 md:py-8">
      <div className="mt-10">
        <SectionBadge> tech Stack</SectionBadge>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {toolStack.map((s) => (
            <CircularStat key={s.name} {...s} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <SectionBadge>General Skills</SectionBadge>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {generalSkills.map((s) => (
            <SmallCircular key={s.name} {...s} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <SectionBadge>Languages</SectionBadge>
        <Card className="p-5 bg-transparent border-none">
          {languages.map((l) => (
            <LanguageRow key={l.name} {...l} />
          ))}
        </Card>
      </div>
    </section>
  );
}

export default StackSection;
