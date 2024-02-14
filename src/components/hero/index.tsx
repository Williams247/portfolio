import { Container } from "../container";
import { TypeWritter } from "../type-writter";
import { Button } from "../button";

export const Hero = () => (
  <div id={"home"} className={"mt-[13rem] w-full"}>
    <Container>
      <div className={"flex justify-center"}>
        <div>
          <div className={"text-left text-[1.2rem] text-white"}>
            <TypeWritter />
          </div>
          <p
            className={
              "font-bold text-[2.3rem] md:text-[4rem] text-white mt-10 md:mt-0"
            }
          >
            Hi, i am{" "}
            <span className={"text-primary-blue-100"}>Williams Alex</span>
          </p>
          <p
            className={
              "text-[1.2rem] text-white max-w-[60ch] md:text-center mt-10 md:mt-0"
            }
          >
            I’m a software engineer that specialize in building websites and web
            applications. I love to achieve my goals.
          </p>
          <div className={"mt-14 md:mt-10 flex md:justify-center"}>
            <a href="" target={"_blank"} rel={"noreferrer"}>
              <Button variant="primary" label="View Resume" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  </div>
);
