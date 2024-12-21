import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "..//taskSlice";
import style from "./style.module.css";
import TaskModal from "../modal/Taskmodal";

const NewTask = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    if (task.trim()) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    if (task.trim() && description.trim()) {
      dispatch(addTask({ id: Date(), title: task, description }));
      setIsModalOpen(false);
      setTask("");
      setDescription("");
      console.log(task, description);
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

      {isModalOpen && (
        <TaskModal
          taskTitle={task}
          onClose={closeModal}
          setDescription={setDescription} // Передаем функцию для обновления описания
        />
      )}
    </div>
  );
};

export default NewTask;
