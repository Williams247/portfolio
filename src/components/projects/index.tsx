import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ProjectsList } from "./constant";
import { Caption } from "../caption";
import { Container } from "../container";

function previewHost(link: string): string {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return "preview";
  }
}

function ProjectImageLightbox({
  src,
  name,
  onClose,
}: {
  src: string;
  name: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div className="absolute inset-0 bg-slate-950/85" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_35%,rgba(85,139,255,0.14),transparent_62%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_80%_75%,rgba(56,189,248,0.06),transparent_55%)]"
        aria-hidden
      />

      <div
        className="relative flex max-h-[min(93vh,980px)] w-full max-w-[min(96vw,1220px)] flex-col overflow-hidden rounded-3xl border border-white/[0.12] bg-gradient-to-b from-slate-900/98 via-slate-950/99 to-[#030712] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_28px_64px_-24px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.08]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-lightbox-title"
      >
        <div className="relative shrink-0">
          <div
            className="h-1.5 w-full bg-gradient-to-r from-primary-blue-100 via-sky-400 to-primary-blue-200/85"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
            aria-hidden
          />
        </div>

        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/[0.07] bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90 px-4 py-3.5 md:px-6 md:py-4">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-blue-100/75">Screenshot</p>
            <p id="project-lightbox-title" className="mt-1 truncate text-base font-semibold tracking-tight text-white md:text-lg">
              {name}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.06] text-xl leading-none text-slate-200 shadow-lg shadow-black/20 transition hover:border-primary-blue-100/35 hover:bg-primary-blue-100/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue-100/45"
            aria-label="Close preview"
          >
            ×
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-auto bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(85,139,255,0.09),transparent_50%)] px-4 py-5 md:px-7 md:py-6">
          <div className="relative mx-auto max-w-full">
            <div className="relative rounded-2xl border border-white/[0.1] bg-slate-950/80 p-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_24px_48px_-12px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.06] md:p-2.5">
              <div className="overflow-hidden rounded-xl bg-slate-950/90 ring-1 ring-black/40">
                <img
                  src={src}
                  alt={`${name} full preview`}
                  className="mx-auto max-h-[min(76vh,840px)] w-auto max-w-full object-contain object-top drop-shadow-[0_28px_56px_rgba(0,0,0,0.5)]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-slate-400">
              <kbd className="rounded border border-white/10 bg-slate-900/80 px-1.5 py-0.5 font-mono text-[10px] text-slate-300">Esc</kbd>
              to close
            </span>
            <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-slate-400">
              Click backdrop to close
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export const Projects = () => {
  const [lightbox, setLightbox] = useState<{ src: string; name: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  return (
    <section className="relative overflow-hidden pb-20 pt-8 md:pb-28">
      <div
        className="pointer-events-none absolute left-1/2 top-[18%] h-[min(400px,48vh)] w-[min(760px,110vw)] -translate-x-1/2 bg-[radial-gradient(ellipse_58%_48%_at_50%_45%,rgba(85,139,255,0.11),transparent_72%)]"
        aria-hidden
      />
      <Container>
        <div className="relative z-10 mx-auto w-full max-w-5xl text-left">
          <Caption label="Projects" />
          <div className="mt-12 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-9 xl:grid-cols-3 xl:gap-9">
            {ProjectsList.map((i, index) => (
              <article
                key={index}
                className="group/card relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-slate-900/50 via-slate-950/70 to-[#050816] shadow-[0_20px_40px_-24px_rgba(0,0,0,0.72)] ring-1 ring-inset ring-white/[0.04]"
              >
                <div className="border-b border-white/[0.06] bg-slate-950/90">
                  <div className="flex items-center gap-2 px-4 py-2.5">
                    <div className="flex gap-1.5" aria-hidden>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/90 shadow-sm" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/90 shadow-sm" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/90 shadow-sm" />
                    </div>
                    <div className="ml-1 min-w-0 flex-1 truncate rounded-md border border-white/[0.06] bg-slate-900/80 px-2.5 py-1 text-center font-mono text-[10px] text-slate-500">
                      {previewHost(i.link)}
                    </div>
                  </div>
                  <div className="px-3 pb-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setLightbox({ src: i.image, name: i.name })}
                      className="group/img relative block w-full cursor-zoom-in overflow-hidden rounded-xl bg-slate-950/50 text-left ring-1 ring-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue-100/50"
                      aria-label={`Open ${i.name} screenshot full screen`}
                    >
                      <div
                        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#050816]/45 via-transparent to-slate-950/20"
                        aria-hidden
                      />
                      <span
                        className="pointer-events-none absolute bottom-2 right-2 z-20 rounded-md border border-white/10 bg-black/45 px-2 py-0.5 text-[10px] font-medium text-white/90"
                        aria-hidden
                      >
                        Enlarge
                      </span>
                      <img
                        src={i.image}
                        alt={`${i.name} preview`}
                        className="aspect-[16/10] w-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(85,139,255,0.07),transparent_55%)] px-5 pb-6 pt-5 md:px-6 md:pb-7 md:pt-6">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="h-px w-6 bg-gradient-to-r from-primary-blue-100/60 to-transparent" aria-hidden />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-blue-100/70">
                      Project
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">{i.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-[1.65] text-slate-300/95">{i.description}</p>

                  <div className="mt-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-blue-100/80">
                      Built with
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {i.stacks.map((stack, stackIndex) => (
                        <span
                          key={stackIndex}
                          className="inline-flex rounded-lg border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-200/95 shadow-sm shadow-black/25"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-dashed border-white/[0.07] pt-6">
                    <a
                      href={i.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-blue-100 via-primary-blue-100 to-sky-500 py-3 text-center text-sm font-bold text-white shadow-lg shadow-primary-blue-100/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue-100/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
                    >
                      View project
                      <span
                        className="text-base leading-none opacity-95"
                        aria-hidden
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
      {lightbox ? (
        <ProjectImageLightbox src={lightbox.src} name={lightbox.name} onClose={() => setLightbox(null)} />
      ) : null}
    </section>
  );
};
