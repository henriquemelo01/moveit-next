import styles from "../styles/components/LevelUpModal.module.css";
import { GrTwitter } from "react-icons/gr";
import { MdClear } from "react-icons/md";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button className={styles.twitterButton} type="button">
          Compartilhar no Twitter
          <GrTwitter
            style={{ color: "var(--blue-twitter)", marginLeft: "1rem" }}
          />
        </button>
        <button
          className={styles.clearButton}
          type="button"
          onClick={closeLevelUpModal}
        >
          <MdClear className={styles.clearIcon} />
        </button>
      </div>
    </div>
  );
}
