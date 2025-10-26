"use client";
import style from "./style.module.css";
import Link from "next/link";
import { projects, professionalProjects } from "../../../data/projects";
import { useState, useRef, useEffect } from "react";

export default function Projects() {
  const [currentProfIndex, setCurrentProfIndex] = useState(0);
  const [currentPersonalIndex, setCurrentPersonalIndex] = useState(0);
  
  const profContainerRef = useRef<HTMLDivElement>(null);
  const personalContainerRef = useRef<HTMLDivElement>(null);

  const scrollToProf = (index: number) => {
    setCurrentProfIndex(index);
    if (profContainerRef.current) {
      const scrollAmount = index * profContainerRef.current.offsetWidth;
      profContainerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToPersonal = (index: number) => {
    setCurrentPersonalIndex(index);
    if (personalContainerRef.current) {
      const scrollAmount = index * personalContainerRef.current.offsetWidth;
      personalContainerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = profContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== currentProfIndex) {
        setCurrentProfIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentProfIndex]);

  useEffect(() => {
    const container = personalContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== currentPersonalIndex) {
        setCurrentPersonalIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentPersonalIndex]);

  return (
    <section id="projects" className={style.projects}>
      <div className={style.projects_container}>
        <h2 className={style.title}>
          MES <span>PROJETS</span>
        </h2>

        {/* Carousel Références Professionnelles */}
        <div className={style.carousel_section}>
          <h3 className={style.section_title}>Références Professionnelles</h3>
          <div className={style.carousel_wrapper}>
            <button 
              className={`${style.carousel_btn} ${style.prev}`}
              onClick={() => scrollToProf(Math.max(0, currentProfIndex - 1))}
              disabled={currentProfIndex === 0}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={style.carousel_container} ref={profContainerRef}>
              {professionalProjects.map((project, index) => (
                <div key={index} className={style.project_card}>
                  <div className={style.project_header}>
                    <h5 className={style.project_title}>{project.title}</h5>
                    {project.company && (
                      <span className={style.project_company}>{project.company}</span>
                    )}
                    {project.year && (
                      <span className={style.project_year}>{project.year}</span>
                    )}
                  </div>
                  <p className={style.project_description}>{project.description}</p>
                  {project.skills && project.skills.length > 0 && (
                    <div className={style.skills_tags}>
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className={style.skill_tag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.link && project.link !== "#" && (
                    <Link
                      href={project.link}
                      className={style.project_link}
                      target="_blank"
                    >
                      Consulter →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <button 
              className={`${style.carousel_btn} ${style.next}`}
              onClick={() => scrollToProf(Math.min(professionalProjects.length - 1, currentProfIndex + 1))}
              disabled={currentProfIndex === professionalProjects.length - 1}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className={style.carousel_dots}>
            {professionalProjects.map((_, index) => (
              <button
                key={index}
                className={`${style.dot} ${index === currentProfIndex ? style.active : ''}`}
                onClick={() => scrollToProf(index)}
              />
            ))}
          </div>
        </div>

        {/* Carousel Projets Personnels */}
        <div className={style.carousel_section}>
          <h3 className={style.section_title}>Projets Personnels</h3>
          <div className={style.carousel_wrapper}>
            <button 
              className={`${style.carousel_btn} ${style.prev}`}
              onClick={() => scrollToPersonal(Math.max(0, currentPersonalIndex - 1))}
              disabled={currentPersonalIndex === 0}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={style.carousel_container} ref={personalContainerRef}>
              {projects.map((project, index) => (
                <div key={index} className={style.project_card}>
                  <h5 className={style.project_title}>{project.title}</h5>
                  <p className={style.project_description}>{project.description}</p>
                  {project.skills && project.skills.length > 0 && (
                    <div className={style.skills_tags}>
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className={style.skill_tag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    href={project.link}
                    className={style.project_link}
                    target="_blank"
                  >
                    Consulter →
                  </Link>
                </div>
              ))}
            </div>

            <button 
              className={`${style.carousel_btn} ${style.next}`}
              onClick={() => scrollToPersonal(Math.min(projects.length - 1, currentPersonalIndex + 1))}
              disabled={currentPersonalIndex === projects.length - 1}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className={style.carousel_dots}>
            {projects.map((_, index) => (
              <button
                key={index}
                className={`${style.dot} ${index === currentPersonalIndex ? style.active : ''}`}
                onClick={() => scrollToPersonal(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
