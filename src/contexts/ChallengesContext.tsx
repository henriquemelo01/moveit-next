import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from "../../challenges.json";

/*
Contexto: Armazena todas as variaveis,funções que desejamos acessa-las por meio dos componentes da aplicação. O contexto permite o compartilhamento de informações entre componentes através da context api do react

Para inserir o contexto na aplicação, importa-se o Context criado no _app.tsx

OBS: A tipagem é utilizada quando passamos um parametro/atributo para o componente, ou retornamos um parâmetro do componente (Ex: value )

*/

interface ChallengesContextDataProps {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  challengesCompleted: number;
  startNewChallenge: () => void;
  activeChallenge: {
    type: "body" | "eye";
    description: string;
    amount: number;
  };
  resetChallenge: () => void;
  experienceToNextLevel: number;
  completedChallenge: () => void;
}

// Instancia um Componente que tem o metodo provider
export const ChallengesContext = createContext(
  {} as ChallengesContextDataProps
); // valor inicial do contexto

// Definindo a tipagem das propriedas que serão passadas como parâmetro ao contexto, a fim de deixarmos a IDE mais inteligente.
interface ChallengesProviderProps {
  children: ReactNode /* Tipagem que indica que a propriedade recebe um elemento jsx */;
}

// Componente que estabelece o contexto
export function ChallengesProvider({ children }: ChallengesProviderProps) {
  //  Dados que desejamos compartilhar com os componentes
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  // Calculo baseado na passagem de nível de um RPG
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  // Função é chamada toda vez que o componente (ChallengesContextProvider) é montado na tela - did mount (life cycle do componente)
  useEffect(() => {
    // API do browser
    Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    // Audio API  do browser
    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio disponível ⏰", {
        body: `Valendo ${challenge.amount} XP`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completedChallenge() {
    if (!activeChallenge) return;

    // A propriedade amount do JSON armazena quanto um desafio da de experiencia
    const { amount } = activeChallenge;

    let finalExperience = amount + currentExperience;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    resetChallenge();
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completedChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
