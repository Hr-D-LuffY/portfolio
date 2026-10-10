import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiJsonwebtokens,
  SiJson,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiPostman,
  SiTailwindcss,
  SiZod,
  SiRedis,
  SiGoogle,
  SiStripe,
  SiVercel,
  SiRender,
} from "react-icons/si";
import {
  ShieldCheck,
  Network,
  Code2,
  Wallet,
  Cookie,
  MessagesSquare,
  Users,
  Puzzle,
  RefreshCw,
  Zap,
} from "lucide-react";

// One flat, ordered list — grouped by `group` for rendering, but adding a
// skill later is just one more object, no restructuring required.
export const skillGroups = [
  {
    group: "Languages",
    items: [
      { name: "Python", Icon: SiPython },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "C", Icon: SiC },
      { name: "C++", Icon: SiCplusplus },
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      { name: "Express.js", Icon: SiExpress },
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Django", Icon: SiDjango },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Zod", Icon: SiZod },
    ],
  },
  {
    group: "Databases & ORM",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MySQL", Icon: SiMysql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Redis", Icon: SiRedis },
      { name: "Prisma", Icon: SiPrisma },
    ],
  },
  {
    group: "Auth, Security & Payments",
    items: [
      { name: "JWT", Icon: SiJsonwebtokens },
      { name: "Google OAuth", Icon: SiGoogle },
      { name: "RBAC", Icon: ShieldCheck },
      { name: "Stripe", Icon: SiStripe },
      { name: "bKash", Icon: Wallet },
    ],
  },
  {
    group: "Web",
    items: [
      { name: "REST APIs", Icon: Network },
      { name: "JSON", Icon: SiJson },
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
      { name: "Cookies", Icon: Cookie },
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Postman", Icon: SiPostman },
      { name: "VS Code", Icon: Code2 },
      { name: "Vercel", Icon: SiVercel },
      { name: "Render", Icon: SiRender },
    ],
  },
  {
    group: "Soft Skills",
    items: [
      { name: "Problem Solving", Icon: Puzzle },
      { name: "Communication", Icon: MessagesSquare },
      { name: "Teamwork", Icon: Users },
      { name: "Adaptability", Icon: RefreshCw },
      { name: "Quick Learner", Icon: Zap },
    ],
  },
];

export const statRow = [
  { label: "Projects built", value: "6" },
  { label: "Payment gateways", value: "2" },
  { label: "Core stack", value: "Next.js" },
];
