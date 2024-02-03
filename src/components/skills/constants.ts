import { ElementType } from "react";
import { JavaScriptIcon } from "./icons/javascript";
import { ReactIcon } from "./icons/react";
import { VueIcon } from "./icons/vue";
import { NextIcon } from "./icons/next";
import { NuxtIcon } from "./icons/nuxt";
import { NodeIcon } from "./icons/node";
import { MongoDBIcon } from "./icons/mongodb";

interface Props {
  Icon: ElementType;
}

export const skills: Props[] = [
  { Icon: JavaScriptIcon },
  { Icon: ReactIcon },
  { Icon: VueIcon },
  { Icon: NextIcon },
  { Icon: NuxtIcon },
  { Icon: NodeIcon },
  { Icon: MongoDBIcon },
];
