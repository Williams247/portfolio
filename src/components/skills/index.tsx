import { Container } from "../container";
import { Caption } from "../caption";
import { skillCategories } from "./constants";

export const Skills = () => (
  <section className="pb-20 pt-8 md:pb-28">
    <Container>
      <div id="skills" className="relative mx-auto w-full max-w-5xl text-left">
        <Caption label="Skills" />
        <div className="mt-12 space-y-14">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary-gray-200">
                {category.title}
              </h3>
              <div className="flex flex-wrap items-center justify-start gap-4 md:gap-5">
                {category.items.map(({ Icon, link, name }) => (
                  <div key={name} className="shrink-0">
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      title={name}
                      className="group flex items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3 transition-[border-color,background-color] duration-200 hover:border-primary-blue-100/25 hover:bg-white/[0.05] md:p-4"
                    >
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center [&_svg]:m-0 [&_svg]:block [&_svg]:h-full [&_svg]:w-full [&_svg]:max-h-full [&_svg]:max-w-full [&_svg]:[shape-rendering:geometricPrecision]">
                        <Icon />
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
