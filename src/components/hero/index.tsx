import { Container } from "../container";
import { TypeWritter } from "../type-writter";
import { Button } from "../button";
import resumePdf from "../../assets/williams_alex_resume.pdf";

export const Hero = () => (
  <div id="home" className="relative w-full min-h-[calc(100vh-6rem)] flex items-center pt-8 pb-16 md:pb-24">
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary-blue-100/12 blur-[100px]" />
      <div className="absolute top-1/3 -left-24 h-[22rem] w-[22rem] rounded-full bg-primary-blue-200/25 blur-[90px]" />
      <div
        className="absolute inset-0 opacity-[0.35] bg-hero-grid bg-grid"
        style={{ backgroundSize: "56px 56px" }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-blue-100/25 to-transparent" />
    </div>

    <Container>
      <div className="relative z-10 flex justify-center">
        <div className="max-w-3xl text-center md:max-w-4xl">
          <div className="text-base md:text-lg text-primary-gray-100/95">
            <TypeWritter />
          </div>
          <p className="font-gotham-rounded-bold mt-8 text-4xl leading-tight text-white md:mt-10 md:text-6xl md:leading-[1.1]">
            Hi, i am{" "}
            <span className="bg-gradient-to-r from-primary-blue-100 via-sky-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(85,139,255,0.35)]">
              Williams Alex!
            </span>
          </p>
          <p className="mx-auto mt-6 max-w-[52ch] text-lg leading-relaxed text-primary-gray-200 md:text-xl">
            I’m a software engineer that specialize in building websites and web applications. I love to
            achieve my goals.
          </p>
          <div className="mt-12 flex justify-center md:mt-14">
            <Button
              variant="primary"
              label="View Resume"
              href={resumePdf}
              target="_blank"
              className="inline-block shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </Container>
  </div>
);
