import style from "./style.module.css";
import img from "next/image";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className={style.header}>
      <p className={style.hello_text}>
        BONJOUR, <span>JE SUIS</span>
      </p>
      <div className={style.text}>
        <h1 className={style.title}>FLORENT MENUS</h1>
        <h2 className={style.subtitle}>DÉVELOPPEUR JUNIOR</h2>
        <Image
          src="/portfolio-fm-2024/assets/shape2.svg"
          className={style.shape2}
          alt="shape2"
          width={434}
          height={489}
        />
        <Image
          src="/portfolio-fm-2024/assets/shape3.svg"
          className={style.shape3}
          alt="shape3"
          width={1008}
          height={629}
        />
      </div>
      <div className={style.buttons_group}>
        <button className={style.button_1}>Me contacter</button>
        <a
          className={style.button_2}
          href="/portfolio-fm-2024/test.png"
          download
        >
          Télécharger mon CV
        </a>
      </div>
      <Image
        src="/portfolio-fm-2024/assets/shape1.svg"
        className={style.shape1}
        alt="shape1"
        width={2550}
        height={179}
      />
    </header>
  );
}
