import { useState } from "react";
import style from "./style.module.css";
import BUTTON_MENU from "..//..//assets/img/button_menu.svg";

const ButtonProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={style.button}
        onClick={handleClick}
        style={{
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s",
        }}
      >
        <img src={BUTTON_MENU} alt="button" />
      </button>
      {isOpen && (
        <div className={style.modal}>
          <p>Profile</p>
          <p>Log Out</p>
        </div>
      )}
    </div>
  );
};

export default ButtonProfile;
