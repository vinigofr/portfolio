import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__namePresentation}>
        <span>Vini Dev</span>
      </div>
      <div className={styles.header__links}>
        <Link href="/home">Home</Link>
        <Link href="/me">Me</Link>
        <Link href="/contact">Contato</Link>
      </div>
    </div>
  );
};

export default Header;
