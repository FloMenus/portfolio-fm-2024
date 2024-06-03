import style from "./style.module.css";
import Image from "next/image";

export default function LinkWidget() {
  return (
    <div className={style.link_widget}>
      <a
        href="https://github.com/FloMenus"
        target="_blank"
        className={style.link}
      >
        <Image
          src="/assets/github.png"
          alt="GitHub"
          width={36}
          height={36}
          className={style.link_image}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/florent-menus/"
        target="_blank"
        className={style.link}
      >
        <Image
          src="/assets/linkedin.png"
          alt="LinkedIn"
          width={36}
          height={36}
          className={style.link_image}
        />
      </a>
    </div>
  );
}
