import style from "./page.module.css";

import Header from "./components/sections/Header/Header";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";
import LinkWidget from "./components/LinksWidget/LinkWidget";

require("dotenv").config();

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <LinkWidget />
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
