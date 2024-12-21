import style from "./style.module.css";
import { FC } from "react";

interface Props {
  onClose: () => void;
  taskTitle: string;
  setDescription: (description: string) => void;
}

const TaskModal: FC<Props> = ({ onClose, taskTitle, setDescription }) => {
  
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.modalContent}>
        <h2>{taskTitle}</h2>
        <textarea 
          placeholder="Введите описание задачи" 
          onChange={handleDescriptionChange}
        />
        <button onClick={onClose}>Х</button>
      </div>
    </div>
  );
};

export default TaskModal;
