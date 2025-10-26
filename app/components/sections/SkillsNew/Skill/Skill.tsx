"use client";
import style from "./style.module.css";
import SkillInterface from "@/app/interfaces/SkillInterface";
import { useState } from "react";

export default function Skill(props: { skill: SkillInterface }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsClicked(false);
  };

  const showTooltip = isHovered || isClicked;

  return (
    <div className={style.skill_container}>
      <button 
        className={style.skill}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`${props.skill.name} - ${props.skill.description}`}
      >
        <img
          src={props.skill.imageUrl}
          alt={`${props.skill.name} logo`}
          className={style.image}
        />
      </button>
      
      <div className={`${style.tooltip} ${showTooltip ? style.tooltip_visible : style.tooltip_hidden}`}>
        <div className={style.tooltip_header}>
          <h4 className={style.tooltip_title}>{props.skill.name}</h4>
          <span className={style.tooltip_mastery}>{"Niveau " + props.skill.mastery}</span>
        </div>
        <p className={style.tooltip_description}>{props.skill.description}</p>
        <div className={style.tooltip_footer}>
          <span className={style.tooltip_experience}>
            {props.skill.yearsOfExperience} {props.skill.yearsOfExperience > 1 ? "ans" : "an"} d&apos;expérience
          </span>
          {props.skill.documentationUrl && (
            <a 
              href={props.skill.documentationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={style.tooltip_link}
              onClick={(e) => e.stopPropagation()}
            >
              📚 Documentation
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
