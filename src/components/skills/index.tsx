import { Container } from "../container";
import { Caption } from "../caption";
import { skills } from "./constants";

export const Skills = () => (
  <Container>
    <div className={"mt-10"}>
      <Caption label={"Skills"} />
      <div className={"flex justify-center"}>
        <div className={"mt-10 flex md:gap-10 w-full flex-wrap"}>
          {skills.map(({ Icon, skill, link }, index) => (
            <div
              key={index}
              className="flex justify-center w-1/2 sm:w-1/2 md:w-[10%]"
              title={skill}
            >
              <a
                href={link}
                target={"_blank"}
                rel={"noreferrer"}
                className={"active:scale-50"}
              >
                <Icon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);
