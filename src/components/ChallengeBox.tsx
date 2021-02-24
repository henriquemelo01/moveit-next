import style from "../styles/components/ChallengeBox.module.css";
import { useState } from "react";

export default function ChallengeBox() {
  const [hasActiveChallenge, setHasActiveChallenge] = useState(true); // Começa com false, após o termino da contagem é setado para true

  return (
    <div className={style.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={style.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="exercise icon" />
            <strong>Novo Desafio</strong>
            <p>
              Vamo la Cazzo !! Vá até o Minas, nade borboleta durante 30
              minutos, em seguida volte correndo para casa e jogue um Codzin{" "}
            </p>
          </main>

          <footer>
            <button type="button" className={style.challengeFailedButton}>
              Aceitar
            </button>
            <button type="button" className={style.challengeSucceededButton}>
              Recusar
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
