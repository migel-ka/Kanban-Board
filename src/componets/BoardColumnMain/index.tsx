import { FC } from "react";
import style from "./style.module.css";
import NewTask from "../NewTask";
import { useSelector } from "react-redux";
import { selectTasks } from "../taskSlice";

interface Task {
  id: number;
  title: string;
}

interface Props {
  title: string;
  items: Task[];
}

const BoardColumnMain: FC<Props> = ({ title }) => {
  const tasks = useSelector(selectTasks); // Получаем список задач из Store

  return (
    <div className={style.container}>
      <h2>{title}</h2>
      {tasks.length === 0 ? (
        <ul>
          <li>Нет задач</li>
        </ul>
      ) : (
        <ul>
          {tasks.map((t: any, index: any) => (
            <li key={index}>{t.title}</li> // Отображаем задачи
          ))}
        </ul>
      )}
      <NewTask />
    </div>
  );
};

export default BoardColumnMain;
