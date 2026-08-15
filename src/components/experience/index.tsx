import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Caption } from "../caption";
import { Container } from "../container";
import { experienceHasMore, experiences, ExperienceItem } from "./constant";

const WorkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-white"
    aria-hidden
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M2 12h20" />
  </svg>
);

const CompanyName = ({
  item,
  id,
  className,
  onNavigate,
  showExternalArrow = true,
  variant = "light",
}: {
  item: ExperienceItem;
  id?: string;
  className: string;
  onNavigate?: () => void;
  showExternalArrow?: boolean;
  variant?: "light" | "dark";
}) => {
  const hoverClass =
    variant === "dark"
      ? "text-white transition-colors hover:text-primary-blue-100"
      : "text-slate-900 transition-colors hover:text-primary-blue-100";
  const arrowClass =
    variant === "dark"
      ? "text-primary-blue-100/70 opacity-60 transition-opacity group-hover:opacity-100"
      : "text-primary-blue-100/70 opacity-60 transition-opacity group-hover:opacity-100";
  const staticClass = variant === "dark" ? "text-white" : "text-slate-900";

  if (item.website) {
    return (
      <a
        id={id}
        href={item.website}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${className} cursor-pointer ${hoverClass}`}
        onClick={onNavigate}
      >
        {item.company}
        {showExternalArrow ? (
          <span className={`ml-1 inline-block ${arrowClass}`} aria-hidden>
            ↗
          </span>
        ) : null}
      </a>
    );
  }
  return (
    <span id={id} className={`${className} ${staticClass}`}>
      {item.company}
    </span>
  );
};

const ExperienceTimelineCard = ({
  item,
  onOpenDetails,
  showMore,
}: {
  item: ExperienceItem;
  onOpenDetails: () => void;
  showMore: boolean;
}) => (
  <article className="group/card relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-slate-900/50 via-slate-950/70 to-[#050816] shadow-[0_28px_56px_-28px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.04] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_36px_70px_-28px_rgba(85,139,255,0.18),0_28px_56px_-28px_rgba(0,0,0,0.6)]">
    <div className="flex h-full min-h-0 flex-1 flex-col px-5 pb-6 pt-6 md:px-7 md:pb-7 md:pt-7">
      <div className="flex gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-blue-100 via-sky-400 to-primary-blue-200 shadow-[0_8px_24px_-8px_rgba(85,139,255,0.45)]"
          aria-hidden
        >
          <WorkIcon />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-semibold tabular-nums tracking-wide text-primary-blue-100">{item.timeframe}</p>
          <h3 className="mt-1 font-gotham-rounded-bold text-lg font-bold leading-snug tracking-tight text-white md:text-xl">
            <CompanyName item={item} className="text-lg font-bold md:text-xl" variant="dark" />
          </h3>
          <p className="mt-1 text-sm font-medium italic text-primary-gray-200">{item.role}</p>
        </div>
      </div>

      <span className="mt-4 inline-flex w-fit items-center rounded-full border border-primary-blue-100/35 bg-primary-blue-100/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-blue-100">
        {item.type}
      </span>

      <ul className="mt-5 grow space-y-3.5 border-l-2 border-primary-blue-100/20 pl-4 text-primary-gray-100/95">
        {item.summary.map((y, idx) => (
          <li key={idx} className="flex gap-2.5 text-[13px] leading-relaxed md:text-sm">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 select-none items-center justify-center rounded-full bg-primary-blue-100/10 text-[11px] font-semibold text-primary-blue-100">
              {idx + 1}
            </span>
            <span>{y}</span>
          </li>
        ))}
      </ul>

      {showMore ? (
        <div className="mt-6 border-t border-white/[0.08] pt-5">
          <button
            type="button"
            onClick={onOpenDetails}
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
        className="flex max-h-[min(85vh,800px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-[#050816] text-left shadow-[0_28px_80px_-16px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.06]"
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
          className="flex shrink-0 select-none items-start justify-between gap-4 border-b border-white/[0.08] bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(85,139,255,0.08),transparent_55%)] px-5 pb-5 pt-5 md:px-7 md:pb-6 md:pt-6 lg:cursor-grab lg:active:cursor-grabbing"
          onMouseDown={onHeaderMouseDown}
          title="Drag to move (desktop)"
        >
          <div className="min-w-0 flex-1">
            <div className="flex gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-blue-100 via-sky-400 to-primary-blue-200 shadow-[0_8px_24px_-8px_rgba(85,139,255,0.45)]"
                aria-hidden
              >
                <WorkIcon />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold tabular-nums tracking-wide text-primary-blue-100">
                  {item.timeframe}
                </p>
                <h2
                  id={titleId}
                  className="mt-1 font-gotham-rounded-bold text-xl font-bold leading-snug tracking-tight text-white md:text-[1.35rem]"
                >
                  <CompanyName
                    item={item}
                    className="text-xl font-bold md:text-[1.35rem]"
                    onNavigate={onClose}
                    showExternalArrow={false}
                    variant="dark"
                  />
                </h2>
                <p className="mt-1 text-sm font-medium italic text-primary-gray-200">{item.role}</p>
              </div>
            </div>
            <span className="mt-4 inline-flex rounded-full border border-primary-blue-100/35 bg-primary-blue-100/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-blue-100">
              {item.type}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] text-lg leading-none text-primary-gray-100 shadow-sm transition hover:border-primary-blue-100/35 hover:bg-primary-blue-100/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue-100/40"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 md:px-7 md:py-7">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-blue-100/70">
            Highlights
          </p>
          <ul className="space-y-4 border-l-2 border-primary-blue-100/20 pl-4">
            {item.description.map((line, idx) => (
              <li key={idx} className="flex gap-3 text-sm leading-relaxed text-primary-gray-100/95">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 select-none items-center justify-center rounded-full bg-primary-blue-100/10 text-xs font-semibold text-primary-blue-100">
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
          <div className="relative mt-10 w-full">
            <div
              className="pointer-events-none absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-primary-blue-100/20 via-primary-blue-100/80 to-primary-blue-100/20 lg:left-1/2 lg:-translate-x-1/2"
              aria-hidden
            />

            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
              {experiences.map((x, index) => {
                const showMore = experienceHasMore(x);
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className="relative flex w-full items-stretch">
                    <div
                      className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary-blue-100 bg-[#020617] shadow-[0_0_14px_rgba(85,139,255,0.55)] lg:left-1/2"
                      aria-hidden
                    />

                    <div
                      className={`w-full pl-10 lg:w-[calc(50%-2rem)] lg:pl-0 ${
                        isLeft ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                      }`}
                    >
                      <ExperienceTimelineCard
                        item={x}
                        showMore={showMore}
                        onOpenDetails={() => setOpenItem(x)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      {openItem ? (
        <ExperienceDetailModal item={openItem} onClose={() => setOpenItem(null)} />
      ) : null}
    </section>
  );
};
