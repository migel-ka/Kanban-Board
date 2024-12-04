import { useState } from "react";
import style from "./style.module.css";

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
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.415 0.209991L6 4.79499L10.585 0.209991L12 1.62499L6 7.62499L0 1.62499L1.415 0.209991Z"
            fill="white"
          />
        </svg>
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
