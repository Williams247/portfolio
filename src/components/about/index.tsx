import { Caption } from "../caption";
import { Container } from "../container";

export const About = () => (
  <section id="about" className="relative overflow-hidden pb-20 pt-8 md:pb-28">
    <Container>
      <div className="relative mx-auto w-full max-w-5xl text-left">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/4 rounded-full bg-primary-blue-100/30 blur-[100px] md:h-80 md:w-80" />
          <div className="absolute left-1/2 top-[58%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/25 blur-[110px] md:h-96 md:w-96" />
          <div className="absolute right-0 top-6 h-56 w-56 translate-x-1/4 rounded-full bg-primary-blue-200/28 blur-[90px] md:h-64 md:w-64" />
        </div>
        <div className="relative z-10">
          <Caption label="About me" />
          <p className="mt-12 text-lg leading-[1.85] text-primary-gray-100/95 md:text-xl">
          I am a Software Engineer specializing in building scalable web and mobile applications from data
          architecture to user experience. Rather than just writing code, I bridge the gap between frontend
          performance, mobile delivery, and cloud infrastructure. On the frontend and mobile space, I
          architect modular interfaces using React, Next.js, Vue, Nuxt, and EAS. On the backend, I design
          robust, high-performance APIs and scalable logic using Node.js (NestJS/Express), Python (FastAPI),
          and PHP. I bring deep cross-functional context and DevOps familiarity to modern engineering teams.
          </p>
        </div>
      </div>
    </Container>
  </section>
);
