import { ElementType } from "react";
import { PhpIcon } from "./icons/php";
import { JavaScriptIcon } from "./icons/javascript";
import { PythonIcon } from "./icons/python";
import { ReactIcon } from "./icons/react";
import { VueIcon } from "./icons/vue";
import { ReactNativeIcon } from "./icons/react-native";
import { NextIcon } from "./icons/next";
import { NuxtIcon } from "./icons/nuxt";
import { ElectronIcon } from "./icons/electron";
import { TauriIcon } from "./icons/tauri";
import { LaravelIcon } from "./icons/laravel";
import { Express } from "./icons/express";
import { NestIcon } from "./icons/nestjs";
import { FastApiIcon } from "./icons/fastapi";
import { MongoDBIcon } from "./icons/mongodb";
import { PostgreSqlIcon } from "./icons/postgresql";
import { RedisIcon } from "./icons/redis";
import { RabbitMqIcon } from "./icons/rabbitmq";
import { RenderIcon } from "./icons/render";
import { VercelIcon } from "./icons/vercel";
import { DigitalOceanIcon } from "./icons/digitalocean";
import { GcpIcon } from "./icons/gcp";
import { AwsIcon } from "./icons/aws";
import { GitIcon } from "./icons/git";
import { GitHubIcon } from "./icons/github-brand";

export interface SkillEntry {
  name: string;
  link: string;
  Icon: ElementType;
}

export interface SkillCategory {
  title: string;
  items: SkillEntry[];
}

/** Mirrors the Technical Skills section of your CV. Icons from Simple Icons (CC0). */
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming languages",
    items: [
      { name: "PHP", link: "https://www.php.net/", Icon: PhpIcon },
      { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", Icon: JavaScriptIcon },
      { name: "Python", link: "https://www.python.org/", Icon: PythonIcon },
    ],
  },
  {
    title: "Libraries & frameworks",
    items: [
      { name: "React", link: "https://react.dev/", Icon: ReactIcon },
      { name: "Vue", link: "https://vuejs.org/", Icon: VueIcon },
      { name: "React Native", link: "https://reactnative.dev/", Icon: ReactNativeIcon },
      { name: "Next.js", link: "https://nextjs.org/", Icon: NextIcon },
      { name: "Nuxt.js", link: "https://nuxt.com/", Icon: NuxtIcon },
      { name: "Electron.js", link: "https://www.electronjs.org/", Icon: ElectronIcon },
      { name: "Tauri.js", link: "https://tauri.app/", Icon: TauriIcon },
      { name: "Laravel", link: "https://laravel.com/", Icon: LaravelIcon },
      { name: "Express.js", link: "https://expressjs.com/", Icon: Express },
      { name: "Nest.js", link: "https://nestjs.com/", Icon: NestIcon },
      { name: "FastAPI", link: "https://fastapi.tiangolo.com/", Icon: FastApiIcon },
    ],
  },
  {
    title: "Databases & message queues",
    items: [
      { name: "MongoDB", link: "https://www.mongodb.com/", Icon: MongoDBIcon },
      { name: "PostgreSQL", link: "https://www.postgresql.org/docs/", Icon: PostgreSqlIcon },
      { name: "Redis", link: "https://redis.io/", Icon: RedisIcon },
      { name: "RabbitMQ", link: "https://www.rabbitmq.com/", Icon: RabbitMqIcon },
    ],
  },
  {
    title: "Cloud & infrastructure",
    items: [
      { name: "Render", link: "https://render.com/", Icon: RenderIcon },
      { name: "Vercel", link: "https://vercel.com/", Icon: VercelIcon },
      { name: "Digital Ocean", link: "https://www.digitalocean.com/", Icon: DigitalOceanIcon },
      { name: "GCP", link: "https://cloud.google.com/", Icon: GcpIcon },
      { name: "AWS", link: "https://aws.amazon.com/", Icon: AwsIcon },
      { name: "Git", link: "https://git-scm.com/", Icon: GitIcon },
      { name: "GitHub", link: "https://github.com/", Icon: GitHubIcon },
    ],
  },
];
