import { ContactForm } from "../contact-form";
import { Container } from "../container";
import { Caption } from "../caption";
import { GitHub } from "../icons/github";
import { Linkendin } from "../icons/linkendin";

const RocketIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-16 w-16 text-primary-blue-100 md:h-20 md:w-20"
    aria-hidden
  >
    <path d="M14 36c8-18 28-26 38-28-2 10-10 30-28 38" />
    <path d="M22 42 14 50l-6-2 2-6 8-8" />
    <circle cx="42" cy="22" r="4" />
    <path d="M30 34 18 46" />
  </svg>
);

const LightningIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-primary-blue-100" aria-hidden>
    <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z" />
  </svg>
);

const socialLinks = [
  {
    href: "https://github.com/Williams247",
    label: "GitHub",
    icon: <GitHub />,
  },
  {
    href: "https://www.linkedin.com/in/williams-alex-17b3201a3/",
    label: "LinkedIn",
    icon: <Linkendin />,
  },
];

export const Contact = () => (
  <section className="pb-12 pt-6 md:pb-16 md:pt-8">
    <Container>
      <div className="relative mx-auto w-full max-w-6xl text-left">
        <Caption label="Contact" />
        <div
          id="contact"
          className="mt-12 grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14 lg:items-stretch"
        >
          <div className="flex flex-col justify-center">
            <RocketIcon />
            <h3 className="mt-8 font-gotham-rounded-bold text-3xl leading-tight text-white md:text-4xl md:leading-[1.15]">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-primary-blue-100 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
                amazing
              </span>{" "}
              together
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-primary-gray-200 md:text-lg">
              Whether you have a project idea, a job opportunity, or just want to say hi — my inbox is
              always open.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-primary-gray-200/90">
              <LightningIcon />
              <span>Typically responds within 24 hours</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary-blue-100/30 bg-primary-blue-100/[0.06] text-primary-blue-100 transition hover:border-primary-blue-100/50 hover:bg-primary-blue-100/[0.12] hover:text-sky-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="rounded-2xl border border-primary-blue-100/20 bg-gradient-to-b from-slate-900/50 via-slate-950/70 to-[#050816] p-6 shadow-[0_0_40px_-12px_rgba(85,139,255,0.25)] ring-1 ring-white/[0.04] md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
