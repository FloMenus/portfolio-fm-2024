"use client";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import "animate.css";

export default function Header() {
  return (
    <header className={style.header}>
      <p className={style.hello_text}>
        BONJOUR, <span>JE SUIS</span>
      </p>
      <div className={style.text}>
        <h1 className={style.title}>FLORENT MENUS</h1>
        <h2 className={style.subtitle}>DÉVELOPPEUR JUNIOR</h2>
        <Parallax speed={20} className={style.shape2}>
          <Image
            src="/assets/shape2.svg"
            alt="shape2"
            width={434}
            height={489}
          />
        </Parallax>
        <Parallax speed={5} className={style.shape3}>
          <Image
            src="/assets/shape3.svg"
            // className={style.shape3}
            alt="shape3"
            width={1008}
            height={629}
          />
        </Parallax>
      </div>
      <div className={style.buttons_group}>
        <Link className={style.button_1} href={"#contact"}>
          Me contacter
        </Link>
        <a className={style.button_2} href="/CV-florent-menus.pdf" download>
          Télécharger mon CV
        </a>
      </div>

      <Image
        src="/assets/shape1.svg"
        className={style.shape1}
        alt="shape1"
        width={2550}
        height={179}
      />
    </header>
  );
}
