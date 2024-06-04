"use client";
import style from "./style.module.css";
import Image from "next/image";
import { Skills as SkillsType } from "../../../../data/skills";

export default function SkillsContainer(skills: SkillsType) {
  return (
    <div className={style.skills_container}>
      <div className={style.header}>
        <Image src={skills.image} width={103} height={104} alt="Skills" />
        <h4 className={style.title}>{skills.title}</h4>
        <h5 className={style.subtitle}>{skills.subtitle}</h5>
      </div>
      <div className={style.skills_group}>
        {skills.categories.map((category, index) => (
          <div key={index} className={style.skills_group}>
            <h6 className={style.skills_group_title}>{category.name}</h6>
            <div className={style.skills_list}>
              {category.subskills.map((subskill, index) => (
                <div key={index} className={style.skill}>
                  <p className={style.skill_name}>{subskill.name}</p>
                  <div className={style.skill_progress_container}>
                    <progress
                      className={style.skill_progress}
                      value={subskill.value}
                      max="100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
