import { useState } from "react";
import style from "./style.module.css";
import NewTask from "../NewTask";

const ButtonAdd = () => {
  const [isTaskVisible, setIsTaskVisible] = useState(false); // Состояние для управления видимостью NewTask

  const handleAddTaskClick = () => {
    setIsTaskVisible(true); // Показываем NewTask при клике на кнопку
  };

  return (
    <div>
      {!isTaskVisible && ( // Если NewTask не виден, показываем кнопку
        <button className={style.buttonAdd} onClick={handleAddTaskClick}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 7H9V2C9 1.448 8.552 1 8 1C7.448 1 7 1.448 7 2V7H2C1.448 7 1 7.448 1 8C1 8.552 1.448 9 2 9H7V14C7 14.552 7.448 15 8 15C8.552 15 9 14.552 9 14V9H14C14.552 9 15 8.552 15 8C15 7.448 14.552 7 14 7Z"
              fill="#5E6C84"
            />
          </svg>
          Добавить задачу
        </button>
      )}
      {isTaskVisible && ( // Если NewTask виден, показываем его
        <NewTask onHide={() => setIsTaskVisible(false)} />
      )}
    </div>
  );
};

export default ButtonAdd;
