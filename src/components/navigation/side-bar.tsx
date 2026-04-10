import { FC } from "react";
import { menuList } from "./constant";
import Logo from "../../static/images/logo.png";
import { Linkendin } from "../icons/linkendin";
import { GitHub } from "../icons/github";

interface Props {
  handleOpenClose: () => void;
}

export const SideBar: FC<Props> = ({ handleOpenClose }) => (
  <div
    className="fixed inset-0 z-50 flex h-full w-full lg:hidden"
    role="dialog"
    aria-modal="true"
    aria-label="Mobile menu"
  >
    <aside
      className="flex h-full min-h-0 w-[min(100vw,20rem)] shrink-0 flex-col border-r border-slate-200/80 bg-white px-8 py-5 text-slate-900 shadow-2xl subpixel-antialiased"
    >
      <div className="flex shrink-0 justify-end">
        <button
          type="button"
          className="-mr-1 rounded-lg p-2 text-3xl leading-none text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          onClick={handleOpenClose}
          aria-label="Close menu"
        >
          &times;
        </button>
      </div>
      <div className="mt-16 flex min-h-0 flex-1 flex-col">
        <a href="#home" onClick={handleOpenClose} className="inline-block w-fit">
          <img
            src={Logo}
            alt="Portfolio sign"
            width={50}
            height={50}
            className="h-[50px] w-[50px] rounded-lg object-cover shadow-sm"
          />
        </a>
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex gap-1 text-slate-800">
            <a
              href="https://github.com/Williams247"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 transition-colors hover:bg-slate-100 hover:text-primary-blue-100"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/williams-alex-17b3201a3/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 transition-colors hover:bg-slate-100 hover:text-primary-blue-100"
            >
              <Linkendin />
            </a>
          </div>
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {menuList.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.path}
                    onClick={handleOpenClose}
                    className="block rounded-lg py-2.5 text-base font-medium text-slate-800 transition-colors hover:bg-slate-100 hover:text-primary-blue-100"
                  >
                    {data.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
    <div
      className="min-h-full min-w-0 flex-1 bg-black/40"
      onClick={handleOpenClose}
      role="presentation"
    />
  </div>
);
