import styles from "../styles/components/SideBar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiMedal } from "react-icons/bi";

export function SideBar() {
  return (
    <aside className={styles.sideContainer}>
      {" "}
      <img src="/icons/logo_menu.png" alt="Moveit Logo" />{" "}
      <button>
        {" "}
        <AiOutlineHome
          className={styles.icon}
          style={{ color: "var(--blue)" }}
        />
      </button>
      <button>
        <BiMedal className={styles.icon} />
      </button>
    </aside>
  );
}
