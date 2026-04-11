import { Caption } from "../caption";
import { Container } from "../container";

export const About = () => (
  <section id="about" className="pb-20 pt-8 md:pb-28">
    <Container>
      <div className="relative mx-auto w-full max-w-5xl text-left">
        <Caption label="About me" />
        <p className="mt-12 text-lg leading-[1.85] text-primary-gray-100/95 md:text-xl">
          Full-Stack Software Engineer with years of experience building, maintaining, and scaling web and mobile
          applications.
        </p>
        <p className="mt-6 text-lg leading-[1.85] text-primary-gray-100/95 md:text-xl">
          I'm passionate about problem-solving, learning new tools, and creating innovative digital solutions.
        </p>
      </div>
    </Container>
  </section>
);
