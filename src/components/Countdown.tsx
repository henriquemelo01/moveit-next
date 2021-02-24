import style from "../styles/components/Countdown.module.css";
import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { MdClose } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

// Tipagem global, variavel foi definida para podemos resetar o countdown fora do escopo do startCountdown()
let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
  // Context Data:
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false); // false
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60); // Math.floor arredonda para baixo
  const seconds = time % 60;

  // .padStart(2,"0") -> verifica se a string tem dois caracteres, se não tive coloca 0 a esquerda
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split(""); // .split("") retorna um array com cada caracter da string
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  // Countdown Functions
  const startCountdown = function () {
    setIsActive(true);
  };

  const resetCountdown = function () {
    setIsActive(false);
    clearTimeout(countdownTimeout);
    setTime(0.1 * 60);
  };

  // Toda vez que o valor de active mudar executa a função.
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      startNewChallenge();
    }
  }, [isActive, time]); // Como time muda a cada 1 segundo a função é disparada a cada segundo, até que time pare de mudar.

  return (
    <div>
      <div className={style.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled className={style.btnCountdown}>
          Ciclo encerrado
          <AiFillCheckCircle className={style.icon} />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              className={`${style.btnCountdown} ${style.btnCountdownActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <MdClose className={style.icon} />
            </button>
          ) : (
            <button className={style.btnCountdown} onClick={startCountdown}>
              Iniciar um ciclo
              <BsFillPlayFill className={style.icon} />
            </button>
          )}
        </>
      )}
    </div>
  );
}
