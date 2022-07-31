import styles from "./Header.module.css";

import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo doo Ignite"></img>
      <h3>Ignite Feed</h3>
    </header>
  );
}
