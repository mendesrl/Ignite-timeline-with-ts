import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1656614291920-80ff97b2cf35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      ></img>

      <div className={styles.profile}>
        <Avatar src="https://github.com/mendesrl.png" hasBorder />
        <strong>Larissa Mendes</strong>
        <span>develop</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size="20" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
