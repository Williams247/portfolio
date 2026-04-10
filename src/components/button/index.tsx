import { FC } from "react";

interface Props {
  label: string;
  variant: string;
  className?: string;
  disabled?: boolean;
  /** When set, renders a single `<a>` with button styling (valid HTML; do not nest `<button>` inside `<a>`). */
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: FC<Props> = ({
  label,
  variant,
  className,
  disabled,
  href,
  target,
  rel,
}) => {
  const merged = (base: string) =>
    `${base} ${className ?? ""}`.trim();

  if (variant === "primary") {
    const base =
      "rounded-xl bg-gradient-to-br from-primary-blue-100 to-sky-500 px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-primary-blue-100/25 transition-all duration-300 hover:shadow-glow active:scale-[0.98]";
    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={merged(base)}
        >
          {label}
        </a>
      );
    }
    return (
      <button
        type="button"
        disabled={disabled}
        className={merged(`${base} disabled:opacity-50`)}
      >
        {label}
      </button>
    );
  }

  if (variant === "outline") {
    const base =
      "rounded-xl border border-primary-blue-100/80 bg-transparent px-8 py-4 text-center text-sm font-semibold text-primary-blue-100 transition-all duration-300 hover:border-sky-300 hover:text-sky-200 active:scale-[0.98]";
    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={merged(base)}
        >
          {label}
        </a>
      );
    }
    return (
      <button
        type="button"
        disabled={disabled}
        className={merged(`${base} disabled:opacity-50`)}
      >
        {label}
      </button>
    );
  }

  if (variant === "pure") {
    const base =
      "rounded-xl border border-white/40 px-8 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/5 active:scale-[0.98]";
    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={merged(base)}
        >
          {label}
        </a>
      );
    }
    return (
      <button
        type="button"
        disabled={disabled}
        className={merged(`${base} disabled:opacity-50`)}
      >
        {label}
      </button>
    );
  }

  return null;
};
