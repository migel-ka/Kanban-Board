import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, selectTasks } from "..//taskSlice"; // Импортируйте действия и селекторы
import style from "./style.module.css";

const NewTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  

  const handleInputChange = (e: any) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    if (task.trim()) {
      dispatch(addTask({ title: task })); // Добавляем задачу в Store
      setTask(""); // Очищаем поле ввода
    }
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
