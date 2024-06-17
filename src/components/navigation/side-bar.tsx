import { FC } from "react";
import { menuList } from "./constant";
import Logo from "../../static/images/logo.png";
import { FaceBook } from "../icons/facebook";
import { Twitter } from "../icons/twitter";
import { Linkendin } from "../icons/linkendin";
import { Instagram } from "../icons/instagram";
import { GitHub } from "../icons/github";

interface Props {
  handleOpenClose: () => void;
}

export const SideBar: FC<Props> = ({ handleOpenClose }) => (
  <div
    className={
      "bg-[rgba(0,0,0,0.4)] block sm:block md:block lg:hidden xl:hidden w-full fixed bottom-0 right-0 left-0 z-20 h-full"
    }
  >
    <div className={"bg-white w-[350px] h-full px-10 py-5"}>
      <div>
        <button className="text-[50px] float-right" onClick={handleOpenClose}>
          &times;
        </button>
      </div>
      <div className="mt-24">
        <a href="#home" onClick={handleOpenClose}>
          <img src={Logo} alt="Portfolio sign" width={50} />
        </a>
      </div>
      <div className={"mt-5"}>
        <div className={"flex gap-2"}>
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
        <ul>
          {menuList.map((data, index) => {
            return (
              <li
                className="mt-5 active:scale-90"
                key={index}
                onClick={handleOpenClose}
              >
                <a href={data.path} className="text-sm font-[500]">
                  {data.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
);
