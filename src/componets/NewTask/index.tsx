import { useState } from "react";
import style from "./style.module.css";

const NewTask = () => {
  const [task, setTask] = useState("");

  const handleInputChange = (e: any) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    console.log("Кнопка работает", task);
    setTask("");
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Введите название задачи"
      />
      <button onClick={handleClick}>Добавить новую задачу</button>
    </div>
  );
};

export default NewTask;
