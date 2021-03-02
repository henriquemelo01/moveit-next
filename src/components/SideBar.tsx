import styles from "../styles/components/SideBar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiMedal } from "react-icons/bi";
import { useState } from "react";

export function SideBar() {
  const [isActive, setIsActive] = useState([true, false]);
  return (
    <aside className={styles.sideContainer}>
      {" "}
      <img src="/icons/logo_menu.png" alt="Moveit Logo" />{" "}
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsActive([true, false]);
        }}
      >
        {" "}
        <AiOutlineHome
          id="homeIcon"
          className={`${styles.icon} ${isActive[0] && styles.buttonActive}`}
        />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsActive([false, true]);
        }}
      >
        <BiMedal
          id="medalIcon"
          className={`${styles.icon} ${isActive[1] && styles.buttonActive} `}
        />
      </button>
    </aside>
  );
}
