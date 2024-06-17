import { Container } from "../container";
import { TypeWritter } from "../type-writter";
import { Button } from "../button";

export const Hero = () => (
  <div id={"home"} className={" w-full h-screen flex items-center"}>
    <Container>
      <div className={"flex justify-center"}>
        <div>
          <div className={"text-center text-[1.2rem] text-white mb-4"}>
            <TypeWritter />
          </div>
          <p
            className={
              "font-gotham-rounded-bold text-[2.3rem] md:text-[4rem] text-white mt-10 md:mt-0 text-center mb-4"
            }
          >
            Hi, i am{" "}
            <span className={"text-primary-blue-100"}>Williams Alex!</span>
          </p>
          <p
            className={
              "text-[1.2rem] text-white max-w-[50ch] md:text-center mt-10 md:mt-0"
            }
          >
            I’m a software engineer that specialize in building websites and web
            applications. I love to achieve my goals.
          </p>
          <div className={"mt-14 md:mt-20 flex md:justify-center"}>
            <a href={require("../../assets/williams-resume.pdf")} target={"_blank"} rel={"noreferrer"}>
              <Button variant="primary" label="View Resume" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  </div>
);
