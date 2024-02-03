import { Container } from "../container";
import { TypeWritter } from "../typeWritter";
import { Button } from "../button";

export const Hero = () => (
  <div id={"home"} className={"mt-[13rem] w-full"}>
    <Container>
      <div className={"flex justify-center"}>
        <div>
          <div className={"text-left text-[1.2rem] text-white"}>
            <TypeWritter />
          </div>
          <p className="font-bold text-[4rem] text-white">
            Hi, i am{" "}
            <span className={"text-primary-blue-100"}>Williams Alex</span>
          </p>
          <p className="text-[1.2rem] text-white max-w-[60ch] text-center">
            I’m a software engineer that specialize in building websites and web
            applications. I love to achieve my goals.
          </p>
          <div className="mt-10 flex justify-center">
            <Button variant="primary" label="View Resume" />
          </div>
        </div>
      </div>
    </Container>
  </div>
);
