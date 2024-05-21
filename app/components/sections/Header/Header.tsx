import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.title}>FLORENT MENUS</h1>
      <h2 className={style.subtitle}>DÉVELOPPEUR JUNIOR</h2>
      <div className={style.buttonsGroup}>
        <button className={style.button_1}>Me contacter</button>
        <button className={style.button_2}>Télécharger mon CV</button>
      </div>
    </header>
  );
}
