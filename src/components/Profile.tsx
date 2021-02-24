import { GiUpgrade } from "react-icons/gi";
import style from "../styles/components/Profile.module.css";

export default function Profile() {
  return (
    <div className={style.profileContainer}>
      <img
        src="https://media-exp1.licdn.com/dms/image/C5603AQEoUH041Zt4ug/profile-displayphoto-shrink_400_400/0/1553534481914?e=1619654400&v=beta&t=hitwr3fiqqWXGaeizmmYQwBiD0xoFR7fEPe5DG9v4U8"
        alt="Henrique Moraes"
      />
      <div>
        <strong>Henrique Moraes</strong>
        <p>
          <GiUpgrade className={style.icon} />
          Level 1
        </p>
      </div>
    </div>
  );
}
