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
  ScrollReveal,
} from "./components";

const PortFolio = () => {
  const [open, setOpen] = useState(false);
  const handleOpenClose = (): void => setOpen(!open);
  return (
    <main className="min-h-screen text-primary-gray-100 antialiased selection:bg-primary-blue-100/25 selection:text-white">
      <div className="relative overflow-hidden py-6 w-full">
        <Container>
          <div className="flex justify-center w-full">
            <Navigation handleOpenClose={handleOpenClose} />
          </div>
        </Container>
        <Hero />
      </div>
      <div className="relative">
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </div>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
      {open && <SideBar handleOpenClose={handleOpenClose} />}
    </main>
  );
};

export default PortFolio;
