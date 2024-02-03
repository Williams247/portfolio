import { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
  label: string;
}

export const Caption: FC<Props> = ({ label }) => (
  <>
    <p className={styles.captionLabel}>{label}</p>
    <div className={styles.captionUnderline}></div>
  </>
);
