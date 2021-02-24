import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import style from "../styles/components/CompletedChallenges.module.css";

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={style.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{String(challengesCompleted).padStart(2, "0").split("")}</span>
    </div>
  );
}
