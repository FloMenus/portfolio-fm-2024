import Image from "next/image";
import style from "./page.module.css";

import Header from "./components/sections/Header/Header";

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <Header />
        <h1>Homepage</h1>
      </main>
    </>
  );
}
