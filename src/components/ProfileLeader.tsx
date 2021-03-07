import { useContext } from "react";
import { GiUpgrade } from "react-icons/gi";
import { ChallengesContext } from "../contexts/ChallengesContext";
import style from "../styles/components/ProfileLeader.module.css";

interface ProfileProps {
  user: string;
  userLevel: number;
}

export default function Profile({ user, userLevel }: ProfileProps) {
  const { level, username } = useContext(ChallengesContext);
  console.log(username);
  return (
    <div className={style.profileContainer}>
      <img
        src={
          user
            ? `https://github.com/${user}.png`
            : `https://github.com/${username}.png`
        }
        alt="GitHub user"
      />
      <div>
        <strong>{user ?? username}</strong>
        <p>
          <GiUpgrade className={style.icon} />
          Level {userLevel ?? level}
        </p>
      </div>
    </div>
  );
}
