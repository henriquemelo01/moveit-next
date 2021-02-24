import styles from "../styles/components/ExperienceBar.module.css";

export default function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 XP</span>
      <div>
        <div style={{ width: "50%" }} />
        <span className={styles.currentExperience} style={{ left: "50%" }}>
          300xp
        </span>
      </div>
      <span>600 XP</span>
    </header>
  );
}

// Estilo da div da progressão de level foi definida no componente, uma vez que ele varia de maneira dinâmica usando JS.
