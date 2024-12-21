import BoardColumn from "../BoardColumn";
import BoardColumnMain from "../BoardColumnMain";
import style from "./style.module.css";

interface Task {
  id: number;
  title: string;
}

const Board = () => {
  const items: Task[] = [];

  return (
    <div className={style.container}>
      <BoardColumnMain title="Новые" items={items} />
      <BoardColumn title="Подтвержденные" items={items} />
      <BoardColumn title="В процессе" items={items} />
      <BoardColumn title="Завершенные" items={items} />
    </div>
  );
};

export default Board;
