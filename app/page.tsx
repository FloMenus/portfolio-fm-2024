import Image from "next/image";
import style from "./page.module.css";

import Header from "./components/sections/Header/Header";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";

require("dotenv").config();

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
