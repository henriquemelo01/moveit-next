import style from "../styles/pages/Home.module.css";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

// Essa página é criada pelo servidor do Next, que retorna o HTML,CSS,JS da nossa aplicação (Server side rendering)

export default function Home() {
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
