import { FC } from "react";
import styles from "./styles.module.scss";
import { FaceBook, Twitter, Linkendin, Instagram, GitHub, Hambugger } from "..";
import Logo from "../../static/images/logo.png";
import { menuList } from "./constant";

interface Props {
  handleOpenClose: () => void;
}

export const Navigation: FC<Props> = ({ handleOpenClose }) => (
  <div className={styles.navigation}>
    <div className="flex">
      <img src={Logo} alt="Portfolio sign" width={50} />
      <div className="mt-3 font-[500] font-[10px]">Williams</div>
    </div>
    <div>
      <ul className={styles.desktopMenuList}>
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
    <div className={styles.hambuggerContainer}>
      <button className={styles.hambuggerButton} onClick={handleOpenClose}>
        <Hambugger />
      </button>
    </div>
    <div className={styles.socialLinks}>
      <button className="px-1 active:scale-90">
        <GitHub />
      </button>
      <button className="px-1 active:scale-90">
        <FaceBook />
      </button>
      <button className="px-1 active:scale-90">
        <Twitter />
      </button>
      <button className="px-1 active:scale-90">
        <Linkendin />
      </button>
      <button className="px-1 active:scale-90">
        <Instagram />
      </button>
    </div>
  </div>
);
