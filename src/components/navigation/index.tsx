import { FC, useState } from "react";
import { FaceBook } from "../icons/facebook";
import { Twitter } from "../icons/twitter";
import { Linkendin } from "../icons/linkendin";
import { Instagram } from "../icons/instagram";
import { GitHub } from "../icons/github";
import { Hambugger } from "../icons/hambugger";
import Logo from "../../static/images/logo.png";
import { menuList } from "./constant";

interface Props {
  handleOpenClose: () => void;
}

export const Navigation: FC<Props> = ({ handleOpenClose }) => {
  const [scrolled, setScrolled] = useState(false);

  window.addEventListener("scroll", function () {
    const scrolledAt =
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000;
    if (scrolledAt) setScrolled(true);
    else setScrolled(false);
  });

  return (
    <div
      className={`bg-white py-3 px-5 flex justify-between w-[85%] fixed rounded-xl ${
        scrolled
          ? "border border-primary-blue-100"
          : "border border-transparent"
      }`}
    >
      <a href="/#">
        <div className="flex">
          <img src={Logo} alt="Portfolio sign" width={50} />
          <div className="mt-3 font-[500] font-[10px]">Williams</div>
        </div>
      </a>
      <div>
        <ul
          className={
            "hidden sm:hidden md:hidden lg:flex xl:flex justify-center mt-3"
          }
        >
          {menuList.map((data, index) => {
            return (
              <li className="px-3 active:scale-90" key={index}>
                <a href={data.path} className="text-sm font-[500]">
                  {data.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={
          "block sm:block md:block lg:hidden xl:hidden mt-[10px] active:scale-90"
        }
      >
        <button
          className={"border block border-gray-800 rounded-sm"}
          onClick={handleOpenClose}
        >
          <Hambugger />
        </button>
      </div>
      <div className={"hidden sm:hidden md:hidden lg:flex xl:flex"}>
        <button className="px-1 active:scale-90">
          <a href={"https://github.com/Williams247"}>
            <GitHub />
          </a>
        </button>
        <button className="px-1 active:scale-90">
          <a href={"https://web.facebook.com/williams.godswill.39/"}>
            <FaceBook />
          </a>
        </button>
        <button className="px-1 active:scale-90">
          <a href={"https://twitter.com/William33199979"}>
            <Twitter />
          </a>
        </button>
        <button className="px-1 active:scale-90">
          <a href={"https://www.linkedin.com/in/williams-alex-17b3201a3/"}>
            <Linkendin />
          </a>
        </button>
        <button className="px-1 active:scale-90">
          <a href={"https://www.instagram.com/williamsgilfoil/"}>
            <Instagram />
          </a>
        </button>
      </div>
    </div>
  );
};
