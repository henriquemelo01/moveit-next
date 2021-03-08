// import style from "../styles/pages/Home.module.css";
import style from "../styles/pages/Pomodoro.module.css";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from "next";
import {
  ChallengesContext,
  ChallengesProvider,
} from "../contexts/ChallengesContext";
import { SideBar } from "../components/SideBar";
import { useContext, useState } from "react";
import { SectionContext } from "../contexts/SectionContext";
import { Leaderboard } from "../components/Leaderboard";
import { Teste } from "../components/Teste";
import { UserCard } from "../components/UserCard";

// Essa página é criada pelo servidor do Next, que retorna o HTML,CSS,JS da nossa aplicação (Server side rendering)

interface HomeProps {
  username: string;
  Level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { currentSection } = useContext(SectionContext); // "pomodoro" ou "leaderboard"
  // Por que não esta conseguindo acessar o valor da variavel? Será que é porque a Home não esta dentro de challenges provider

  // Funcionalidade para organizar o array
  const accounts = [
    {
      username: props.username,
      challengesCompleted: props.challengesCompleted,
      level: props.Level,
      currentExperience: props.currentExperience,
    },
    {
      username: "luccacazzio",
      challengesCompleted: 0,
      level: 1,
      currentExperience: 0,
    },
    {
      username: "teste",
      level: 35,
      challengesCompleted: 150,
      currentExperience: 120,
    },
    {
      username: "teste2",
      level: 105,
      challengesCompleted: 150,
      currentExperience: 120,
    },
  ];

  // Adicionando propriedade posição e userExperience de maneira dinâmica

  // UserExperience = acc.currentExperience + Math.pow((acc.level - 1 + 1) * 4, 2);
  function calcUserExperience(currentExperience: number, level: number) {
    if (level === 1) return currentExperience;
    return currentExperience + Math.pow(level * 4, 2);
  }

  function addUserExperience(): Array<{
    userExperience: number;
    username: string;
    challengesCompleted: number;
    level: number;
    currentExperience: number;
  }> {
    const newArr = accounts.map((acc, index) => {
      const newAcc = {
        ...acc,
        userExperience: calcUserExperience(acc.currentExperience, acc.level),
      };
      // newAcc.userExperience = calcUserExperiencte(acc.currentExperience, acc.level)
      return newAcc;
      Number;
    });

    return newArr;
  }

  // Função sort do JS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const sortAccArr = function () {
    const sortedArray = addUserExperience().sort((a, b) => {
      if (a.userExperience > b.userExperience) {
        return -1;
      } else if (a.userExperience < b.userExperience) {
        return 1;
      } else if (a.userExperience < b.userExperience) {
        return 0;
      }
    });

    return sortedArray;
  };

  console.log(calcUserExperience(props.currentExperience, props.Level));

  return (
    <ChallengesProvider
      username={props.username}
      Level={props.Level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={style.mainContainer}>
        <SideBar />
        <div className={style.container}>
          {currentSection === "pomodoro" && (
            <div className="pomodoro">
              <Head>
                <title>Inicio | move.it</title>
              </Head>
              <ExperienceBar />
              <CountdownProvider>
                <section>
                  <div className={style.leftContainer}>
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                  </div>
                  <div>
                    <ChallengeBox />
                  </div>
                </section>
              </CountdownProvider>
            </div>
          )}
          {currentSection === "leaderboard" && (
            <>
              {/* Refatorar o código + começar a implementar a modal que será aberta após os 25 minutos - ordenar as divs*/}
              <div className={style.leaderboardContainer}>
                <strong>Leaderboard</strong>
                <div>
                  <div className={style.tableHead}>
                    <p>POSIÇÃO</p>
                    <p>USUÁRIO</p>
                    <p>DESAFIOS</p>
                    <p>EXPERIÊNCIA</p>
                  </div>

                  {sortAccArr().map((acc, index) => {
                    return (
                      <UserCard
                        userData={{
                          position: index + 1,
                          username: acc.username,
                          challengesCompleted: acc.challengesCompleted,
                          userExperience: acc.userExperience,
                          level: acc.level,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ChallengesProvider>
  );
}

// Acesso ao app: O next roda um servidor Node (Back-end) que contém o front-end da aplicação, que é construido a partir do React, buscando os dados do Back-end. Quando é declarado a função abaixo, consiguimos manipular quais dados serão passados do Next para o Front-end (React). Assim, normalmente, utiliza-se a função getServerSideProps para fazermos uma chamada a API e possamos preencher a interface com estes dados

// Antes de construir a interface chama a api, pega os dados, repassa para os componentes e ai ele mostra os dados em tela . A função é executada no servidor node

// Mudar nome do "Level" armazenado no cookies para level

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    Level,
    currentExperience,
    challengesCompleted,
    username,
  } = ctx.req.cookies;
  return {
    props: {
      username,
      Level: Number(Level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
