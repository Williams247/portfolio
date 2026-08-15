import { Caption } from "../caption";
import { Container } from "../container";
import { ScrollReveal } from "../scroll-reveal";

const CodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7 text-white"
    aria-hidden
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const LayersIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-primary-blue-100"
    aria-hidden
  >
    <path d="m12.83 2.18 8 4.5a1 1 0 0 1 0 1.74l-8 4.5a2 2 0 0 1-1.66 0l-8-4.5a1 1 0 0 1 0-1.74l8-4.5a2 2 0 0 1 1.66 0Z" />
    <path d="m22 12.5-8 4.5a2 2 0 0 1-1.66 0l-8-4.5" />
    <path d="m22 17.5-8 4.5a2 2 0 0 1-1.66 0l-8-4.5" />
  </svg>
);

const ServerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-primary-blue-100"
    aria-hidden
  >
    <rect x="2" y="3" width="20" height="7" rx="1.5" />
    <rect x="2" y="14" width="20" height="7" rx="1.5" />
    <circle cx="7" cy="6.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="7" cy="17.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const CloudIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-primary-blue-100"
    aria-hidden
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const highlights = ["Full-Stack", "Web & Mobile", "Cloud-Ready"];

const focusAreas = [
  {
    icon: LayersIcon,
    label: "Frontend & Mobile",
    text: "I architect modular interfaces with React, Next.js, Vue, Nuxt, and EAS—focused on performance, polish, and smooth delivery across web and mobile.",
    tags: ["React", "Next.js", "Vue", "Nuxt", "EAS"],
  },
  {
    icon: ServerIcon,
    label: "Backend & APIs",
    text: "I design high-performance APIs and scalable logic with Node.js (NestJS/Express), Python (FastAPI), PHP, and Laravel.",
    tags: ["NestJS", "FastAPI", "Laravel", "PostgreSQL", "MongoDB"],
  },
  {
    icon: CloudIcon,
    label: "Infrastructure & Delivery",
    text: "I bring cross-functional context and DevOps familiarity—connecting product UX to reliable deployment, cloud infrastructure, and CI/CD.",
    tags: ["AWS", "Vercel", "CI/CD", "Nx", "Vite"],
  },
];

export const About = () => (
  <section id="about" className="relative overflow-hidden pb-16 pt-8 md:pb-28">
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-blue-100/18 blur-[100px] md:left-0 md:h-80 md:w-80" />
      <div className="absolute right-0 top-1/2 h-64 w-64 translate-x-1/4 -translate-y-1/2 rounded-full bg-sky-400/12 blur-[100px] md:h-72 md:w-72" />
      <div className="absolute left-1/2 top-[55%] h-[min(26rem,85vw)] w-[min(26rem,85vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(85,139,255,0.1)_0%,transparent_68%)]" />
    </div>

    <Container>
      <div className="relative z-10 mx-auto w-full max-w-5xl text-left">
        <Caption label="About me" />

        <ScrollReveal className="mt-8 md:mt-12">
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/55 via-slate-950/75 to-[#050816]/95 shadow-[0_28px_56px_-28px_rgba(0,0,0,0.55)]">
            <div className="bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(85,139,255,0.08),transparent_55%)] p-6 md:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-12">
                <div className="flex flex-col justify-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-blue-100 via-sky-400 to-primary-blue-200 shadow-[0_8px_24px_-8px_rgba(85,139,255,0.45)]"
                    aria-hidden
                  >
                    <CodeIcon />
                  </div>
                  <h3 className="mt-6 font-gotham-rounded-bold text-2xl leading-tight text-white md:text-3xl">
                    Building products that feel{" "}
                    <span className="bg-gradient-to-r from-primary-blue-100 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
                      polished end to end
                    </span>
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-primary-gray-200 md:text-lg">
                    I specialize in scalable web and mobile applications—from data architecture to user
                    experience—bridging frontend performance, mobile delivery, and cloud infrastructure.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {highlights.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full border border-primary-blue-100/30 bg-primary-blue-100/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-blue-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  {focusAreas.map(({ icon: Icon, label, text, tags }, index) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-primary-blue-100/20 hover:bg-white/[0.04] md:p-6"
                    >
                      <div className="flex items-start gap-3.5">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-blue-100/10"
                          aria-hidden
                        >
                          <Icon />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 shrink-0 select-none items-center justify-center rounded-full bg-primary-blue-100/10 text-[10px] font-semibold text-primary-blue-100">
                              {index + 1}
                            </span>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                              {label}
                            </h4>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-primary-gray-100/95 md:text-[15px] md:leading-relaxed">
                            {text}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-lg border border-white/[0.06] bg-slate-950/40 px-2.5 py-1 text-[11px] font-medium text-primary-gray-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </Container>
  </section>
);
