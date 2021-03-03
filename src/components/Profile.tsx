import { GiUpgrade } from "react-icons/gi";
import style from "../styles/components/Profile.module.css";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export default function Profile() {
  const { level, username } = useContext(ChallengesContext);
  console.log(username);
  return (
    <div className={style.profileContainer}>
      <img src={`https://github.com/${username}.png`} alt="GitHub user" />
      <div>
        <strong>{username}</strong>
        <p>
          <GiUpgrade className={style.icon} />
          Level {level}
        </p>
      </div>
    </div>
  );
}
