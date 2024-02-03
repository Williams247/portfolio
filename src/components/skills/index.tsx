import { Container } from "../container";
import { Caption } from "../caption";
import { skills } from "./constants";

export const Skills = () => (
  <Container>
    <div className={"mt-20"}>
    <Caption label={"Skills"} />
      <div className={"flex justify-center"}>
        <div className={"mt-10 flex justify-between w-full"}>
          {skills.map(({ Icon }, index) => (
            <div key={index} className="flex justify-center">
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);
