import styles from "../styles/pages/Home.module.css";
import { AiFillGithub } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LandingPage() {
  const [login, setLogin] = useState("");
  const changeColor = login.length !== 0 ? `var(--green)` : `var(--blue-dark)`;

  const router = useRouter();
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img src="/logo-full.svg" />
        <div>
          <strong>Bem-vindo</strong>
          <div className={styles.loginHeader}>
            <AiFillGithub className={styles.gitHubIcon} />
            <p>Faça login com seu GitHub para começar</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/pomodoro");
            }}
          >
            <input
              placeholder="Login"
              type="username"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <button
              style={{
                transition: "background-color 0.6s",
                backgroundColor: `${changeColor}`,
              }}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                router.push("/pomodoro");
              }}
            >
              <MdNavigateNext className={styles.nextIcon} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
