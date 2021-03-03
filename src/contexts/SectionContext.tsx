import { createContext, ReactNode, useState } from "react";

//Retorno do atributo value do SectionContext.Provider
interface SectionContextProps {
  currentSection: string;
  openPomodoroSection: () => void;
  openLeaderboard: () => void;
}

// Tipagem das propriedades que serão recebidas como parâmetro
interface SectionProviderProps {
  children: ReactNode;
}

export const SectionContext = createContext({} as SectionContextProps); // createContext(retorno do atributo value)

export function SectionProvider({ children }: SectionProviderProps) {
  const [currentSection, setCurrentSection] = useState("pomodoro");

  const openPomodoroSection = function () {
    setCurrentSection("pomodoro");
  };

  const openLeaderboard = function () {
    setCurrentSection("leaderboard");
  };

  return (
    <SectionContext.Provider
      value={{ currentSection, openPomodoroSection, openLeaderboard }}
    >
      {children}
    </SectionContext.Provider>
  );
}
