import style from "./page.module.css";

import Header from "./components/sections/Header/Header";
import About from "./components/sections/About/About";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";
import LinkWidget from "./components/LinksWidget/LinkWidget";
import SkillsNew from "./components/sections/SkillsNew/SkillsNew";
import Career from "./components/sections/Career/Career";

require("dotenv").config();

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <LinkWidget />
        <Header />
        <About />
        <Career />
        <SkillsNew />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
