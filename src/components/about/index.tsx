import { Caption } from "../caption";
import { Container } from "../container";

export const About = () => (
  <section id="about" className="pb-20 pt-8 md:pb-28">
    <Container>
      <div className="relative mx-auto w-full max-w-5xl text-left">
        <Caption label="About me" />
        <p className="mt-12 text-lg leading-[1.85] text-primary-gray-100/95 md:text-xl">
          I'm a Software engineer with over 5 years of working experience. I derive joy in performing my duties
          with the technologies I've used throughout my working experience. I also love to learn new technologies
          and expand my knowledge as a software engineer. Solving problems and creating new ideas and inventions
          is like an everyday task for me, it keeps me going.
        </p>
      </div>
    </Container>
  </section>
);
