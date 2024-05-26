import Image from "next/image";
import style from "./style.module.css";
import SkillsContainer from "./SkillsContainer/SkillsContainer";

export default function Skills() {
  return (
    <section className={style.skills}>
      <h3 className={style.title}>
        MES <span>COMPÉTENCES</span>
        {/* <Image
          src="/assets/shape3.svg"
          alt="shape3"
          className={style.shape3}
          width={1008}
          height={629}
        /> */}
      </h3>
      <p className={style.text}>
        {
          "Voici les compétences que j'ai acquises au cours de ma formation et de mes projets personnels. J'ai une préférence pour le développement front-end, mais je suis également à l'aise avec le back-end."
        }
      </p>

      <SkillsContainer />
    </section>
  );
}
