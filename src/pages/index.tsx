import style from "../styles/pages/Home.module.css";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from "next";

// Essa página é criada pelo servidor do Next, que retorna o HTML,CSS,JS da nossa aplicação (Server side rendering)

export default function Home(props) {
  // console.log(props);
  return (
    <div className={style.container}>
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
  );
}

// Acesso ao app: O next roda um servidor Node (Back-end) que contém o front-end da aplicação, que é construido a partir do React, buscando os dados do Back-end. Quando é declarado a função abaixo, consiguimos manipular quais dados serão passados do Next para o Front-end (React). Assim, normalmente, utiliza-se a função getServerSideProps para fazermos uma chamada a API e possamos preencher a interface com estes dados

// Antes de construir a interface chama a api, pega os dados, repassa para os componentes e ai ele mostra os dados em tela . A função é executada no servidor node

// Mudar nome do "Level" armazenado no cookies para level

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: { Level, currentExperience, challengesCompleted },
  };
};
