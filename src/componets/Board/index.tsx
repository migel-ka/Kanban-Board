import BoardInput from "../BoardInput";
import style from "./style.module.css";

interface Task {
  id: number;
  title: string;
}

const Board = () => {
  const items: Task[] = [];

  return (
    <div className={style.container}>
      <BoardInput title="Новые" items={items} />
      <BoardInput title="Подтвержденные" items={items} />
      <BoardInput title="В процессе" items={items} />
      <BoardInput title="Завершенные" items={items} />
    </div>
  );
};

export default Board;
