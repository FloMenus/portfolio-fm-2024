import style from "./page.module.css";

import Header from "./components/sections/Header/Header";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";
import LinkWidget from "./components/LinksWidget/LinkWidget";

import { Suspense } from "react";

require("dotenv").config();

export default function Home() {
  return (
    <>
      <main className={style.main}>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <LinkWidget />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        {/* </Suspense> */}
      </main>
    </>
  );
}
