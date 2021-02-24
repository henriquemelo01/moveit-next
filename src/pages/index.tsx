import style from "../styles/pages/Home.module.css";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";

// Essa página é criada pelo servidor do Next, que retorna o HTML,CSS,JS da nossa aplicação (Server side rendering)

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div className={style.leftContainer}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
        {/* <div className={style.rightContainer}>
          <strong>Inicie um ciclo para receber desafios</strong>
          <div
            style={{
              marginTop: "5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="#" style={{ marginBottom: "2rem" }} />
            <p>Avance de level completando os desafios </p>
          </div>
        </div> */}
      </section>
    </div>
  );
}
