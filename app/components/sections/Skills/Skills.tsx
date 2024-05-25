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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat..
      </p>

      <SkillsContainer />
    </section>
  );
}
