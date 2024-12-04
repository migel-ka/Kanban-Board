import { ChangeEvent, FC, useState } from "react";
import style from "./style.module.css";


interface Props {
  onHide: () => void; 
}

const NewTask: FC<Props> = ({ onHide }) => {
  const [task, setTask] = useState<string>(""); 
  const [isVisible, setIsVisible] = useState<boolean>(true); 

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value); 
  };

  const handleConfirmClick = () => {
    console.log("Кнопка работает", task);
    setTask("");
    setIsVisible(false);
    onHide();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={style.container}>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Введите название задачи"
      />
      <button onClick={handleConfirmClick}>Добавить новую задачу</button>
    </div>
  );
};

export default NewTask;
