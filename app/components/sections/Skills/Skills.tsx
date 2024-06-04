import style from "./style.module.css";
import SkillsContainer from "./SkillsContainer/SkillsContainer";
import { skills } from "../../../data/skills";

export default function Skills() {
  return (
    <section className={style.skills}>
      <h3 className={style.title}>
        MES <span>COMPÉTENCES</span>
      </h3>
      <div className={style.skills_container}>
        {skills.map((skills, index: number) => (
          <SkillsContainer key={index} {...skills} />
        ))}
      </div>
    </section>
  );
}
