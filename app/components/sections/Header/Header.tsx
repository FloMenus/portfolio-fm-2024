"use client";
import style from "./style.module.css";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import CodeBackground from "./CodeBackground/CodeBackground";

export default function Header() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    if (target && target.startsWith("#")) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <header className={style.header}>
      <CodeBackground />
      <h1 className={style.visually_hidden}>Florent Menus - Développeur Web Full Stack</h1>
      <p className={style.hello_text}>
        BONJOUR, <span>JE SUIS</span>
      </p>
      <div className={style.text}>
        <h2 className={style.title}>FLORENT MENUS</h2>
        <h3 className={style.subtitle}>DÉVELOPPEUR FULLSTACK</h3>
      </div>
      <div className={style.buttons_group}>
        <a 
          className={style.button_1} 
          href="#contact"
          onClick={handleSmoothScroll}
        >
          Me contacter
        </a>
        <a className={style.button_2} href="/CV-florent-menus.pdf" download>
          Télécharger mon CV
        </a>
      </div>

      <svg 
        className={style.shape1}
        xmlns="http://www.w3.org/2000/svg" 
        width="2555.28" 
        height="179.79" 
        viewBox="0 0 13104 922"
        preserveAspectRatio="none"
      >
        <path 
          d="M-65,636S296.946,329.45,980,313,4570.75,561,5032,561c1186.47,0,4243.15-614.767,5581-529,1337.8,85.767,2250,310.512,2486,418s258,574,258,574L-17,1015" 
          fill="#171818"
          fillRule="evenodd"
        />
      </svg>
    </header>
  );
}
