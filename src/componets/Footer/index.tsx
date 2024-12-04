import style from "./style.module.css";

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.containerFooter}>
        <div className={style.containerFooterBlock}>
          <p>Active tasks: </p>
          <p>Finished tasks: </p>
        </div>
        <p>Kanban board by NAME, YEAR</p>
      </div>
    </footer>
  );
};

export default Footer;
