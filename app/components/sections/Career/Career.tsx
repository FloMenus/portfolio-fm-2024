"use client";
import style from './style.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Career() {
    const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

    const diplomas = [
        {
            level: "Bac+5",
            title: "Master Ingénierie du Web",
            school: "ESGI",
            period: "2025 - En cours",
            status: "En cours",
            skills: ["React", "Vue.js", "Nuxt","TypeScript", "PHP", "Symfony", "Node.js", "NestJS", "Architecture", "Kubernetes", "DevOps", "CI/CD", "Server Security", "Accessibilité"]
        },
        {
            level: "Bac+3",
            title: "Bachelor Ingénierie du Web",
            school: "ESGI",
            period: "2024 - 2025",
            status: "Obtenu",
            skills: ["HTML/CSS", "JavaScript", "PHP", "SQL", "Git", "Laravel", "Linux", "Docker", "Figma", "Wordpress", "Gestion de projet", "Design Patterns", "Algorithme"]
        },
        {
            level: "Bac+2",
            title: "Formation Développeur Web & Web Mobile",
            school: "Konexio",
            period: "2022 - 2023",
            status: "Obtenu",
            skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Express"]
        }
    ];

    const experiences = [
        {
            level: "Alternance",
            title: "Développeur Web Frontend",
            company: "Shin Agency",
            period: "2024 - 2025",
            status: "Terminée",
            skills: ["PHP", "TypeScript", "Laravel", "Vue.js", "WordPress", "Scss", "MySQL", "Docker", "Portainer", "Figma", "Git", "Agile/Scrum"]
        },
        {
            level: "Alternance",
            title: "Développeur Web Fullstack",
            company: "YVEA",
            period: "2022 - 2023",
            status: "Terminée",
            skills: ["TypeScript", "React", "Redux", "Node.js", "Express", "NestJS", "Sass", "MongoDB", "PostgreSQL", "Git", "Agile/Scrum"]
        },
    ];

    const currentData = activeTab === 'education' ? diplomas : experiences;

    return (
        <section className={style.career}>
            <h3 className={style.title}>MON <span>PARCOURS</span></h3>
            
            {/* Switch buttons */}
            <div className={style.switch_container}>
                <button 
                    className={`${style.switch_button} ${activeTab === 'education' ? style.active : ''}`}
                    onClick={() => setActiveTab('education')}
                >
                    Formation
                </button>
                <button 
                    className={`${style.switch_button} ${activeTab === 'experience' ? style.active : ''}`}
                    onClick={() => setActiveTab('experience')}
                >
                    Expériences
                </button>
            </div>

            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={style.timeline}
                >
                    {currentData.map((item, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className={style.timeline_item}
                        >
                            <div className={style.timeline_marker}>
                                <div className={`${style.timeline_dot} ${item.status === 'En cours' ? style.current : ''}`}></div>
                            </div>
                            <div className={style.career_card}>
                                <div className={style.career_header}>
                                    <span className={style.career_level}>{item.level}</span>
                                    <span className={`${style.career_status} ${item.status === 'En cours' ? style.current_status : style.completed_status}`}>
                                        {item.status === 'En cours' ? 'En cours' : activeTab === 'education' ? 'Obtenu' : 'Terminée'}
                                    </span>
                                </div>
                                <h4 className={style.career_title}>{item.title}</h4>
                                <p className={style.career_school}>
                                    {activeTab === 'education' ? (item as any).school : (item as any).company}
                                </p>
                                <p className={style.career_period}>{item.period}</p>
                                <div className={style.skills_container}>
                                    {item.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className={style.skill_tag}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    )
}
