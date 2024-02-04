import { FC } from "react";
import { menuList } from "./constant";
import Logo from "../../static/images/logo.png";
import styles from "./styles.module.scss";

interface Props {
  handleOpenClose: () => void;
}

export const SideBar: FC<Props> = ({ handleOpenClose }) => (
  <div className={styles.sideBar}>
    <div className={styles.sideBarContent}>
      <div>
        <button className="text-[50px] float-right" onClick={handleOpenClose}>
          &times;
        </button>
      </div>
      <div className="mt-24">
        <a href="#home" onClick={handleOpenClose}>
          <img src={Logo} alt="Portfolio sign" width={50} />
        </a>
        <p className="mt-3 font-[500] font-[10px]">Williams</p>
      </div>
      <div className="mt-10">
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
