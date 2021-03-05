import style from "../styles/components/UserCard.module.css";
import ProfileLeader from "../components/ProfileLeader";

interface UserCardProps {
  userData: {
    username: string;
    level: number;
    challengesCompleted: number;
    userExperience: number;
  };
}

export function UserCard({ userData }: UserCardProps) {
  return (
    <div className={style.mainContainer}>
      <div>
        <div className={style.cardContainer}>
          <div>{userData.level}</div>
          <div>
            <div className={style.profile}>
              <ProfileLeader user={userData.username} />
            </div>
            <p>
              <span>{userData.challengesCompleted}</span> completados
            </p>
            <p>
              <span>{userData.userExperience}</span>xp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
