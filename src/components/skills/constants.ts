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
import { Express } from "./icons/express"

interface Props {
  Icon: ElementType;
  skill: string;
}

export const skills: Props[] = [
  { Icon: JavaScriptIcon, skill: "JavaScript" },
  { Icon: VueIcon, skill: "Vue" },
  { Icon: ReactIcon, skill: "React" },
  { Icon: NextIcon, skill: "Next Js" },
  { Icon: TypeScriptIcon, skill: "TypeScript" },
  { Icon: NuxtIcon, skill: "Nuxt Js" },
  { Icon: NodeIcon, skill: "Node Js" },
  { Icon: MongoDBIcon, skill: "Mongo DB" },
  { Icon: Tailwind, skill: "Tailwind" },
  { Icon: Bootstrap, skill: "Bootstrap" },
  { Icon: Express, skill: "Express" }
];
