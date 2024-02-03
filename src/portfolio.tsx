import { useState } from "react";

import {
  Navigation,
  Hero,
  Container,
  About,
  Location,
  Skills,
  Footer,
  SideBar,
  Experience
} from "./components";

const PortFolio = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpenClose = (): void => setOpen(!open);
  return (
    <>
      <div className="bg-black py-14 w-full">
        <Container>
          <div className={"flex justify-center w-full"}>
            <Navigation handleOpenClose={handleOpenClose} />
          </div>
        </Container>
        <Hero />
      </div>
      <div className="mt-3">
        <About />
        <Skills />
        <Experience />
        <Location />
        <Footer />
        {open && <SideBar handleOpenClose={handleOpenClose} />}
      </div>
    </>
  );
};

export default PortFolio;
