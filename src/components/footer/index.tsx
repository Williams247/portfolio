import { Container } from "..";
import { Phone, Mail } from "..";
import styles from "./styles.module.scss";

export const Footer = (): JSX.Element => (
  <div id="footer" className="bg-primary-blue-100 py-5 mt-20">
    <Container>
      <div className={styles.footerContainer}>
        <div className="text-sm text-white font-bold">
          All right reserved {new Date().getFullYear()}
        </div>
        <div className={styles.contextAndIcon}>
          <div className="flex">
            <Phone />
            <div className="text-sm ml-2 text-white font-bold">Tel: +2347012714644</div>
          </div>
          <div className={styles.footerEmailSection}>
            <Mail />
            <div className="text-sm ml-2 text-white font-bold">
              williamsalexjr@gmail.com
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);
