// Toda vez que desejamos compartilhar dados/funções através de um componente, cria-se um contexto para o mesmo, importando esses dados aos componentes que desejam ter acesso a este contexto atraves do atributo values

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { ChallengesContext } from "./ChallengesContext";

// Tipagem do retorno do CountdownContext.Provider
interface CountdownContextDataProps {
  minutes: number;
  seconds: number;
  isActive: boolean; // Timer esta ativo
  hasFinished: boolean; // Timer finalizou a contagem
  startCountdown: () => void;
  resetCountdown: () => void;
}

// Tipagem do props que será passado como parametro para o componente CountdownProvider
interface CountdownProviderProps {
  children: ReactNode;
}

//Exportando Countdown
export const CountdownContext = createContext({} as CountdownContextDataProps); // createContext(retorno do atributo value)

// Tipagem global, variavel foi definida para podemos resetar o countdown fora do escopo do startCountdown()
let countdownTimeout: NodeJS.Timeout;

// OBS: children -> Elemento que irá ter acesso ao context
export function CountdownProvider({ children }: CountdownProviderProps) {
  // Challenge context Data: Como o useEffet utiliza o metodo startNewChallenge vindo do contexto, devemos "importa-lo"
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false); // false
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60); // Math.floor arredonda para baixo
  const seconds = time % 60;

  // Countdown Functions
  const startCountdown = function () {
    setIsActive(true);
  };

  const resetCountdown = function () {
    setIsActive(false);
    setHasFinished(false); // coloquei agora
    clearTimeout(countdownTimeout);
    setTime(25 * 60);
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
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
