import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  /** Extra classes on the wrapper (e.g. w-full) */
  className?: string;
  /** Stagger animation start (ms) */
  delayMs?: number;
}

/**
 * Fades content up when it enters the viewport. Runs once per page load (observer disconnects after reveal).
 */
export const ScrollReveal = ({ children, className = "", delayMs = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full ${visible ? "animate-fade-up" : "translate-y-4 opacity-0"} ${className}`.trim()}
      style={
        visible && delayMs > 0
          ? { animationDelay: `${delayMs}ms`, animationFillMode: "backwards" as const }
          : undefined
      }
    >
      {children}
    </div>
  );
};
