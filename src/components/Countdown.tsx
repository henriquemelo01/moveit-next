import style from "../styles/components/Countdown.module.css";
import { useState, useEffect } from "react";

export default function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60); // Math.floor arredonda para baixo
  const seconds = time % 60;

  // .padStart(2,"0") -> verifica se a string tem dois caracteres, se não tive coloca 0 a esquerda
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split(""); // .split("") retorna um array com cada caracter da string
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const startCountdown = function () {
    setActive(true);
  };

  // Toda vez que o valor de active mudar executa a função.
  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]); // Como time muda a cada 1 segundo a função é disparada a cada segundo, até que time pare de mudar.

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
      {!active && (
        <button
          type="button"
          className={style.btnCountdown}
          onClick={startCountdown}
        >
          Iniciar um ciclo
        </button>
      )}

      {active && (
        <button
          style={{ backgroundColor: "var(--white)", color: "var(--text)" }}
          type="button"
          className={style.btnCountdown}
          onClick={startCountdown}
        >
          Abandonar
        </button>
      )}
    </div>
  );
}
