import style from "./style.module.css";
import BUTTONPLUS from "..//..//assets/img/button_plus.svg";

const ButtonAdd = () => {
  return (
    <div>
      <button className={style.buttonAdd}>
       <img src={BUTTONPLUS} alt="add" />
        Добавить задачу
      </button>
    </div>
  );
};

export default ButtonAdd;
