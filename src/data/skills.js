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
} from "react-icons/si";
import { ShieldCheck, Network, Code2 } from "lucide-react";

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
    ],
  },
  {
    group: "Databases & ORM",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MySQL", Icon: SiMysql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Prisma", Icon: SiPrisma },
    ],
  },
  {
    group: "Auth & Security",
    items: [
      { name: "JWT", Icon: SiJsonwebtokens },
      { name: "RBAC", Icon: ShieldCheck },
    ],
  },
  {
    group: "Web",
    items: [
      { name: "REST APIs", Icon: Network },
      { name: "JSON", Icon: SiJson },
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Postman", Icon: SiPostman },
      { name: "VS Code", Icon: Code2 },
    ],
  },
];

export const statRow = [
  { label: "Shipped projects", value: "3" },
  { label: "User roles modeled", value: "9" },
  { label: "Core stack", value: "MERN" },
];
