import { FC } from "react";
import style from "./style.module.css";
import NewTask from "../NewTask";

interface Task {
  id: number;
  title: string;
}

interface Props {
  title: string;
  items: Task[];
}

const BoardColumnMain: FC<Props> = ({ title, items }) => {
  return (
    <div className={style.container}>
      <h2>{title}</h2>
      {items.length === 0 ? (
        <ul>
          <li>Нет задач</li>
        </ul>
      ) : (
        <ul>
          {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
        </ul>
      )}
      <NewTask />
    </div>
  );
};

export default BoardColumnMain;
