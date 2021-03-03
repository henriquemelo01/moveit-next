import { throws } from "assert";
import styles from "../styles/components/Leaderboard.module.css";

export function Leaderboard() {
  return (
    <div className={styles.leaderboardContainer}>
      <strong>Leaderboard</strong>
      <table>
        <thead>
          <tr>
            <th>POSIÇÃO</th>
            <th>USUÁRIO</th>
            <th>DESAFIOS</th>
            <th>EXPERIÊNCIA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Miniprofile</td>
            <td>127 completados</td>
            <td>154000 xp</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
