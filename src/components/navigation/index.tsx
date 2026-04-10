import { FC, useEffect, useState } from "react";
import { Linkendin } from "../icons/linkendin";
import { GitHub } from "../icons/github";
import { Hambugger } from "../icons/hambugger";
import Logo from "../../static/images/logo.png";
import { menuList } from "./constant";

interface Props {
  handleOpenClose: () => void;
}

export const Navigation: FC<Props> = ({ handleOpenClose }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`mx-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 shadow-md shadow-black/10 backdrop-blur-xl transition-all duration-300 sm:px-4 md:gap-4 md:px-5 lg:justify-start ${
        scrolled
          ? "border-slate-200/80 bg-white/95 shadow-lg"
          : "border-white/15 bg-white/[0.92]"
      }`}
    >
      <a href="/#" className="flex shrink-0 items-center gap-2 md:gap-2.5">
        <img
          src={Logo}
          alt="Portfolio sign"
          width={44}
          height={44}
          className="rounded-lg shadow-sm shadow-black/5"
        />
        <span className="text-sm font-semibold text-slate-800">Williams</span>
      </a>

      <nav className="hidden min-h-[40px] min-w-0 flex-1 items-center justify-center lg:flex" aria-label="Primary">
        <ul className="flex flex-wrap items-center justify-center gap-x-0.5 gap-y-1">
          {menuList.map((data, index) => (
            <li key={index}>
              <a
                href={data.path}
                className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary-blue-100 md:px-3 md:text-sm"
              >
                {data.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden shrink-0 items-center justify-end gap-0.5 lg:flex lg:gap-1">
        <a
          href="https://github.com/Williams247"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary-blue-100"
          aria-label="GitHub"
        >
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/williams-alex-17b3201a3/"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary-blue-100"
          aria-label="LinkedIn"
        >
          <Linkendin />
        </a>
      </div>

      <div className="flex shrink-0 items-center lg:hidden">
        <button
          type="button"
          className="rounded-lg border border-slate-200/90 p-2 text-slate-700 transition-colors hover:bg-slate-100"
          onClick={handleOpenClose}
          aria-label="Open menu"
        >
          <Hambugger />
        </button>
      </div>
    </div>
  );
};
