"use client";

import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";

const skills: { name: string; image: string }[] = [
  { name: "HTML5", image: "html" },
  { name: "CSS3", image: "css" },
  { name: "JavaScript", image: "javascript" },
  { name: "TypeScript", image: "typescript" },
  { name: "React", image: "react" },
  { name: "Next.js", image: "nextjs" },
  { name: "SaSS", image: "sass" },
  { name: "MaterialUI", image: "mui" },
  { name: "Tailwind CSS", image: "tailwind" },
  { name: "Redux", image: "redux" },
  { name: "Node.js", image: "nodejs" },
  { name: "Express.js", image: "express" },
  { name: "MySQL", image: "mysql" },
  { name: "MongoDB", image: "mongodb" },
  { name: "Nest.js", image: "nest" },
  { name: "Jest", image: "jest" },
  { name: "Git", image: "git" },
  { name: "Figma", image: "figma" },
  { name: "Photoshop", image: "photoshop" },
  { name: "Illustrator", image: "illustrator" },
];

export default function SkillsContainer() {
  const [selectedSkill, setSelectedSkill]: [
    string,
    (selectedSkill: string) => void
  ] = useState("");

  return (
    <div className={style.skills_container}>
      {skills.map((skill) => (
        <div className={style.skill} key={skill.name}>
          <Image
            key={skill.name}
            src={`/assets/skills/${skill.image}.png`}
            alt={skill.name}
            className={style.skill_image}
            width={70}
            height={70}
            onMouseEnter={() => {
              setSelectedSkill(skill.name);
            }}
            onMouseLeave={() => {
              selectedSkill === skill.name && setSelectedSkill("");
            }}
          />

          <div
            className={
              selectedSkill === skill.name
                ? `${style.message_box} ${style.displayed}`
                : style.message_box
            }
          >
            {skill.name}
          </div>
        </div>
      ))}
      {/* <Image
        src="/assets/shape5.svg"
        alt="shape5"
        className={style.shape5}
        width={677}
        height={770}
      /> */}
    </div>
  );
}
