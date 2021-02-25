import style from "../styles/components/Countdown.module.css";
import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { CountdownContext } from "../contexts/CountdownContext";

// Tipagem global, variavel foi definida para podemos resetar o countdown fora do escopo do startCountdown()
let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
  // Context Data:
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  // OBS: A formatação não faz parte da regra de negocio, ou seja, ela não faz parte de como a aplicação funciona em si, mas como é visualizada. Só faz parte do componente Countdown em sí

  // .padStart(2,"0") -> verifica se a string tem dois caracteres, se não tive coloca 0 a esquerda
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split(""); // .split("") retorna um array com cada caracter da string
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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
