import styles from "../styles/pages/LandingPage.module.css";
import { AiFillGithub } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import { useRouter } from "next/router";

export default function LandingPage() {
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
          <form>
            <input placeholder="Login" type="username" />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                router.push("/");
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
