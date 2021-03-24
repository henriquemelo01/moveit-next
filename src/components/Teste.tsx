import style from "../styles/components/Teste.module.css";
import ProfileLeader from "../components/ProfileLeader";
import { UserCard } from "./UserCard";

export function Teste({ ...rest }) {
  return (
    <div className={style.leaderboardContainer}>
      <strong>Leaderboard</strong>
      <div>
        <div>
          <p>POSIÇÃO</p>
          <p>USUÁRIO</p>
          <p>DESAFIOS</p>
          <p>EXPERIÊNCIA</p>
        </div>
        <div className={style.tableBody}>
          <div>1</div>
          <div>
            <div className={style.profile}>{/* <ProfileLeader /> */}</div>
            <p>
              <span>127</span> completados
            </p>
            <p>
              <span>1540000</span>xp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
