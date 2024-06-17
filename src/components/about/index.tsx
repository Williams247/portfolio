import { Caption } from "../caption";
import { Container } from "../container";
import { skills } from "../skills/constants";

export const About = () => (
  <section id="about">
    <Container>
      <div>
        <Caption label="About me" />
        <div className={"mt-10"}>
          <p className={"text-white"}>
            I'm a Software engineer with over 4 and half years of working
            experience. I derive joy in performing my duties with the
            technologies I've used throughout my working experience. I also love
            to learn new technologies and expand my knowledge as a software
            engineer. Solving problems and creating new ideas and inventions is
            like an everyday task for me, it keeps me going. I'm skilled in the
            following technologies:<br />
            {skills.map(({ skill }, index) => (
              <span key={index}> {skill}{skills.length === index + 1 ? '.':','}</span>
            ))}
          </p>
        </div>
      </div>
    </Container>
  </section>
);
