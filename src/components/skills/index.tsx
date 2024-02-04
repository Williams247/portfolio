import { Container } from "../container";
import { Caption } from "../caption";
import { skills } from "./constants";

export const Skills = () => (
  <Container>
    <div className={"mt-10"}>
    <Caption label={"Skills"} />
      <div className={"flex justify-center"}>
        <div className={"mt-10 flex gap-20 w-full flex-wrap"}>
          {skills.map(({ Icon, skill }, index) => (
            <div key={index} className="flex justify-center" title={skill}>
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);
