import { useState } from "react";

import {
  Navigation,
  Hero,
  Container,
  About,
  Contact,
  Skills,
  Footer,
  SideBar,
  Experience,
  Projects,
} from "./components";

const PortFolio = () => {
  const [open, setOpen] = useState(false);
  const handleOpenClose = (): void => setOpen(!open);
  return (
    <main>
      <div className="bg-black py-6 w-full">
        <Container>
          <div className={"flex justify-center w-full"}>
            <Navigation handleOpenClose={handleOpenClose} />
          </div>
        </Container>
        <Hero />
      </div>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      {open && <SideBar handleOpenClose={handleOpenClose} />}
    </main>
  );
};

export default PortFolio;
