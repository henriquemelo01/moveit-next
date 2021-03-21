import { useState, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import style from "../styles/components/ChallengeBox.module.css";

export default function ChallengeBox() {
  // Context Data:
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown, wasTheRestAccepted } = useContext(CountdownContext);

  const handleFailedButton = function () {
    resetChallenge();
    // Se o tempo de descaso foi aceito não reseta o countdown
    if (wasTheRestAccepted) return;
    resetCountdown();
  };

  const handleSucceededButton = function () {
    completedChallenge();
    // Se o tempo de descaso foi aceito não reseta o countdown
    if (wasTheRestAccepted) return;
    resetCountdown();
  };

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
              onClick={handleFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              className={style.challengeSucceededButton}
              onClick={handleSucceededButton}
            >
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
