import Image from "next/image";
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Image src="/assets/fm-logo.png" alt="logo" width={58} height={58} />
      <p className={style.text}>© 2024 - Florent Menus. Tous droits réservés</p>
    </footer>
  );
}
