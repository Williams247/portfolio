import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Caption } from "../caption";
import { Container } from "../container";
import { experienceHasMore, experiences, ExperienceItem } from "./constant";

const CompanyName = ({
  item,
  id,
  className,
  onNavigate,
  showExternalArrow = true,
}: {
  item: ExperienceItem;
  id?: string;
  className: string;
  onNavigate?: () => void;
  showExternalArrow?: boolean;
}) => {
  if (item.website) {
    return (
      <a
        id={id}
        href={item.website}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${className} cursor-pointer text-slate-900 transition-colors hover:text-primary-blue-100`}
        onClick={onNavigate}
      >
        {item.company}
        {showExternalArrow ? (
          <span
            className="ml-1 inline-block text-primary-blue-100/70 opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden
          >
            ↗
          </span>
        ) : null}
      </a>
    );
  }
  return (
    <span id={id} className={`${className} text-slate-900`}>
      {item.company}
    </span>
  );
};

function clampModalOffset(x: number, y: number) {
  if (typeof window === "undefined") return { x, y };
  const maxX = Math.min(340, window.innerWidth * 0.42);
  const maxY = Math.min(300, window.innerHeight * 0.42);
  return {
    x: Math.round(Math.max(-maxX, Math.min(maxX, x))),
    y: Math.round(Math.max(-maxY, Math.min(maxY, y))),
  };
}

const ExperienceDetailModal = ({
  item,
  onClose,
}: {
  item: ExperienceItem;
  onClose: () => void;
}) => {
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setDragOffset({ x: 0, y: 0 });
  }, [item]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const titleId = `experience-modal-${item.company.replace(/\s+/g, "-")}`;

  const onHeaderMouseDown = (e: React.MouseEvent) => {
    if (typeof window === "undefined" || !window.matchMedia("(min-width: 1024px)").matches) {
      return;
    }
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest("button, a")) return;

    const startX = e.clientX;
    const startY = e.clientY;
    const originX = dragOffset.x;
    const originY = dragOffset.y;

    const onMove = (ev: MouseEvent) => {
      setDragOffset(
        clampModalOffset(originX + ev.clientX - startX, originY + ev.clientY - startY)
      );
    };

    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    e.preventDefault();
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="flex max-h-[min(85vh,800px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-white/12 bg-white text-left shadow-[0_28px_80px_-16px_rgba(0,0,0,0.75)] ring-1 ring-white/10"
        style={{ transform: `translate(${dragOffset.x}px, ${dragOffset.y}px)` }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div
          className="h-1 w-full shrink-0 bg-gradient-to-r from-primary-blue-100 via-sky-400/90 to-primary-blue-200/75"
          aria-hidden
        />
        <div
          className="flex shrink-0 select-none items-start justify-between gap-4 border-b border-slate-200/80 bg-gradient-to-b from-slate-50 to-white px-5 pb-5 pt-5 md:px-7 md:pb-6 md:pt-6 lg:cursor-grab lg:active:cursor-grabbing"
          onMouseDown={onHeaderMouseDown}
          title="Drag to move (desktop)"
        >
          <div className="min-w-0 flex-1">
            <p className="inline-flex rounded-full bg-primary-blue-100/[0.11] px-3 py-1 text-[13px] font-semibold tabular-nums tracking-wide text-primary-blue-100">
              {item.timeframe}
            </p>
            <h2
              id={titleId}
              className="mt-3 text-xl font-semibold leading-snug tracking-tight text-slate-900 md:text-[1.35rem]"
            >
              <CompanyName item={item} className="text-xl font-semibold md:text-[1.35rem]" onNavigate={onClose} showExternalArrow={false} />
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-600">{item.role}</p>
            <span className="mt-2 inline-flex rounded-md border border-slate-200/90 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              {item.type}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200/90 bg-white text-lg leading-none text-slate-500 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue-100/40"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 md:px-7 md:py-7">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Highlights</p>
          <ul className="space-y-4 border-l-2 border-primary-blue-100/25 pl-4">
            {item.description.map((line, idx) => (
              <li key={idx} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 select-none items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-primary-blue-100">
                  {idx + 1}
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body
  );
};

export const Experience = () => {
  const [openItem, setOpenItem] = useState<ExperienceItem | null>(null);

  useEffect(() => {
    if (!openItem) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [openItem]);

  return (
    <section className="pb-20 pt-8 md:pb-28">
      <Container>
        <div id="experience" className="relative mx-auto w-full max-w-5xl text-left">
          <Caption label="Experience" />
          <div className="mt-10 grid w-full grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-2 lg:gap-8">
            {experiences.map((x, index) => {
              const showMore = experienceHasMore(x);
              return (
                <article
                  key={index}
                  className="group/card relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white via-white to-slate-50/95 shadow-[0_28px_56px_-28px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.06] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_36px_70px_-28px_rgba(85,139,255,0.22),0_28px_56px_-28px_rgba(0,0,0,0.6)]"
                >
                  <div
                    className="h-1 w-full bg-gradient-to-r from-primary-blue-100 via-sky-400/90 to-primary-blue-200/70"
                    aria-hidden
                  />
                  <div className="flex h-full min-h-0 flex-1 flex-col px-5 pb-6 pt-6 md:px-7 md:pb-7 md:pt-7">
                    <p className="inline-flex w-fit max-w-full rounded-full bg-primary-blue-100/[0.11] px-3 py-1 text-[13px] font-semibold tabular-nums tracking-wide text-primary-blue-100">
                      {x.timeframe}
                    </p>
                    <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-slate-900">
                      <CompanyName item={x} className="text-lg font-semibold" />
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-600">{x.role}</p>
                    <span className="mt-2.5 inline-flex w-fit items-center rounded-md border border-slate-200/90 bg-slate-50/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {x.type}
                    </span>
                    <ul className="mt-5 grow space-y-3.5 border-l-2 border-primary-blue-100/20 pl-4 text-slate-700">
                      {x.summary.map((y, idx) => (
                        <li key={idx} className="flex gap-2.5 text-[13px] leading-relaxed md:text-sm">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 select-none items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-primary-blue-100">
                            {idx + 1}
                          </span>
                          <span>{y}</span>
                        </li>
                      ))}
                    </ul>
                    {showMore ? (
                      <div className="mt-6 border-t border-slate-100/90 pt-5">
                        <button
                          type="button"
                          onClick={() => setOpenItem(x)}
                          className="inline-flex items-center gap-2 rounded-full border border-primary-blue-100/30 bg-primary-blue-100/[0.08] px-4 py-2 text-sm font-semibold text-primary-blue-100 shadow-sm shadow-primary-blue-100/5 transition hover:border-primary-blue-100/50 hover:bg-primary-blue-100/[0.14] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue-100/40"
                        >
                          View full details
                          <span aria-hidden className="text-base leading-none">
                            →
                          </span>
                        </button>
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
      {openItem ? (
        <ExperienceDetailModal item={openItem} onClose={() => setOpenItem(null)} />
      ) : null}
    </section>
  );
};
