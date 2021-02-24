import { useState, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import style from "../styles/components/ChallengeBox.module.css";

export default function ChallengeBox() {
  const [hasActiveChallenge, setHasActiveChallenge] = useState(true); // Começa com false, após o termino da contagem é setado para true

  // Context Data:
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={style.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={style.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt="exercise icon"
            />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={style.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={style.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={style.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up icon" />
            Avance de Level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
