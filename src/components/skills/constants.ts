import { ElementType } from "react";
import { PythonIcon } from "./icons/python";
import { PhpIcon } from "./icons/php";
import { LaravelIcon } from "./icons/laravel";
import { ReactIcon } from "./icons/react";
import { ReactNativeIcon } from "./icons/react-native";
import { VueIcon } from "./icons/vue";
import { NextIcon } from "./icons/next";
import { NuxtIcon } from "./icons/nuxt";
import { TypeScriptIcon } from "./icons/typescript";
import { Tailwind } from "./icons/tailwind";
import { JavaScriptIcon } from "./icons/javascript";
import { Bootstrap } from "./icons/bootstrap";
import { NodeIcon } from "./icons/node";
import { Express } from "./icons/express";
import { NestIcon } from "./icons/nestjs";
import { NxIcon } from "./icons/nx";
import { ViteIcon } from "./icons/vite";
import { CiCdIcon } from "./icons/cicd";
import { ResponsiveDesignIcon } from "./icons/responsive-design";
import { FastApiIcon } from "./icons/fastapi";
import { PostgreSqlIcon } from "./icons/postgresql";
import { MongoDBIcon } from "./icons/mongodb";
import { AwsIcon } from "./icons/aws";
import { VercelIcon } from "./icons/vercel";
import { NetlifyIcon } from "./icons/netlify";
import { GitIcon } from "./icons/git";

export interface SkillEntry {
  name: string;
  link: string;
  Icon?: ElementType;
}

export interface SkillCategory {
  title: string;
  items: SkillEntry[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Mobile Core",
    items: [
      { name: "React", link: "https://react.dev/", Icon: ReactIcon },
      { name: "Next.js", link: "https://nextjs.org/", Icon: NextIcon },
      { name: "Vue.js", link: "https://vuejs.org/", Icon: VueIcon },
      { name: "Nuxt.js", link: "https://nuxt.com/", Icon: NuxtIcon },
      { name: "TypeScript", link: "https://www.typescriptlang.org/", Icon: TypeScriptIcon },
      { name: "TailwindCSS", link: "https://tailwindcss.com/", Icon: Tailwind },
      { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", Icon: JavaScriptIcon },
      { name: "HTML5/CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", Icon: Bootstrap },
      {
        name: "EAS (Expo Application Services)",
        link: "https://expo.dev/eas",
        Icon: ReactNativeIcon,
      },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Node.js", link: "https://nodejs.org/", Icon: NodeIcon },
      { name: "NestJS", link: "https://nestjs.com/", Icon: NestIcon },
      { name: "Express", link: "https://expressjs.com/", Icon: Express },
      { name: "FastAPI", link: "https://fastapi.tiangolo.com/", Icon: FastApiIcon },
      { name: "Python", link: "https://www.python.org/", Icon: PythonIcon },
      { name: "PHP", link: "https://www.php.net/", Icon: PhpIcon },
      { name: "Laravel", link: "https://laravel.com/", Icon: LaravelIcon },
      { name: "PostgreSQL", link: "https://www.postgresql.org/docs/", Icon: PostgreSqlIcon },
      { name: "MongoDB", link: "https://www.mongodb.com/", Icon: MongoDBIcon },
    ],
  },
  {
    title: "Infrastructure, Cloud & Tools",
    items: [
      { name: "AWS", link: "https://aws.amazon.com/", Icon: AwsIcon },
      { name: "Vercel", link: "https://vercel.com/", Icon: VercelIcon },
      { name: "Netlify", link: "https://www.netlify.com/", Icon: NetlifyIcon },
      { name: "Nx Monorepos", link: "https://nx.dev/", Icon: NxIcon },
      { name: "Vite", link: "https://vite.dev/", Icon: ViteIcon },
      { name: "Git", link: "https://git-scm.com/", Icon: GitIcon },
      { name: "CI/CD", link: "https://github.com/features/actions", Icon: CiCdIcon },
      {
        name: "Responsive Design",
        link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
        Icon: ResponsiveDesignIcon,
      },
    ],
  },
];
