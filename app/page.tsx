import Image from "next/image";
import style from "./page.module.css";

import Header from "./components/sections/Header/Header";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <Header />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
