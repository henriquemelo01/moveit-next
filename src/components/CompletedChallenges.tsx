import style from "../styles/components/CompletedChallenges.module.css";

export default function CompletedChallenges() {
  return (
    <div className={style.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>00</span>
    </div>
  );
}
