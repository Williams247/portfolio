import { ElementType } from "react";
import { JavaScriptIcon } from "./icons/javascript";
import { ReactIcon } from "./icons/react";
import { VueIcon } from "./icons/vue";
import { NextIcon } from "./icons/next";
import { NuxtIcon } from "./icons/nuxt";
import { NodeIcon } from "./icons/node";
import { MongoDBIcon } from "./icons/mongodb";
import { TypeScriptIcon } from "./icons/typescript";
import { Tailwind } from "./icons/tailwind";
import { Bootstrap } from "./icons/bootstrap";
import { ReduxIcon } from "./icons/redux";
import { Express } from "./icons/express";

interface Props {
  Icon: ElementType;
  skill: string;
  link: string;
}

export const skills: Array<Props> = [
  {
    Icon: JavaScriptIcon,
    skill: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { Icon: VueIcon, skill: "Vue", link: "https://vuejs.org/" },
  { Icon: ReactIcon, skill: "React", link: "https://react.dev/" },
  { Icon: NextIcon, skill: "Next Js", link: "https://nextjs.org/" },
  { Icon: TypeScriptIcon, skill: "TypeScript", link: "https://www.typescriptlang.org/docs/" },
  { Icon: NuxtIcon, skill: "Nuxt Js", link: "https://nuxt.com/" },
  { Icon: NodeIcon, skill: "Node Js", link: "https://nodejs.org/docs/latest/api/" },
  { Icon: MongoDBIcon, skill: "Mongo DB", link: "https://www.mongodb.com/" },
  { Icon: Tailwind, skill: "Tailwind", link: "https://tailwindcss.com/" },
  { Icon: Bootstrap, skill: "Bootstrap", link: "https://getbootstrap.com/" },
  { Icon: ReduxIcon, skill: "Redux", link: "https://redux.js.org/" },
  { Icon: Express, skill: "Express", link: "https://expressjs.com/en/4x/api.html" },
];
