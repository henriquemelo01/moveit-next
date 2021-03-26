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
  isRestTimeOpen: boolean;
  showRestModal: () => void;
  closeRestModal: () => void;
  wasTheRestAccepted: boolean;
  startRestCountDown: () => void;
  resetRestCountdown: () => void;
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
  const { startNewChallenge, resetChallenge } = useContext(ChallengesContext);

  // Rest time Modal
  const [isRestTimeOpen, setIsRestTimeOpen] = useState(false); // false
  const [wasTheRestAccepted, setWasTheRestAccepted] = useState(false);

  const showRestModal = function () {
    setIsRestTimeOpen(true);
  };

  const closeRestModal = function () {
    setIsRestTimeOpen(false);
  };

  // Timer
  const [time, setTime] = useState(0.1 * 60);
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
    setHasFinished(false);
    clearTimeout(countdownTimeout);
    setTime(0.1 * 60);
  };

  const startRestCountDown = function () {
    setHasFinished(false);
    clearTimeout(countdownTimeout);
    setTime(0.2 * 60);
    setWasTheRestAccepted(true);
  };

  const resetRestCountdown = function () {
    setWasTheRestAccepted(false);
    // Se passou o tempo de descanso e o usuario não aceitou o desafio, o mesmo sera resetado, assim este não recebe o xp do desafio
    resetChallenge();
    resetCountdown();
  };

  const triggerRestCountdownNoti = function () {
    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("O tempo de descanso terminou !! ⏰", {
        body: `Hora de dedicar ao trabalho 🤓📖💻 !!`,
      });
    }
  };

  // Toda vez que o valor de active mudar executa a função.
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      if (wasTheRestAccepted) {
        triggerRestCountdownNoti();
        resetRestCountdown();
        return;
      }

      // Usuario não aceitou tempo de descanso
      setHasFinished(true);
      startNewChallenge();
      showRestModal();
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
        isRestTimeOpen,
        showRestModal,
        closeRestModal,
        wasTheRestAccepted,
        startRestCountDown,
        resetRestCountdown,
      }}
    >
      {children} {/* Todos elementos que terão acesso ao context */}
    </CountdownContext.Provider>
  );
}
