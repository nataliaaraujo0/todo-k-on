import styles from "./header.module.scss";

import igniteLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do todo" />
    </header>
  );
}
