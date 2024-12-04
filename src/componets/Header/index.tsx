import style from "./style.module.css";
import AVATAR from "../img/user-avatar.png";
import ButtonProfile from "../ButtonProfile";

const Header = () => {
  return (
    <header className={style.container}>
      <div className={style.containerHeader}>
        <h1>Awesome Kanban Board</h1>
        <div className={style.containerHeaderProfile}>
          <img src={AVATAR} alt="profile" />
         <ButtonProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
