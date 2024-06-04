import style from "./style.module.css";
import Link from "next/link";

const projects: { title: string; link: string; description: string }[] = [
  {
    title: "Sandbox Angular",
    link: "https://fm-ng-sandbox.netlify.app/",
    description: "Sandbox pour tester des fonctionnalités Angular",
  },
  {
    title: "Site vitrine Yvea",
    link: "https://fm-yvea-landing.onrender.com/",
    description:
      "Site vitrine pour une plateforme de gestion automatisée de certificats d'export de marchandises",
  },
  {
    title: "Moovice",
    link: "https://moovice-flomenus.netlify.app/",
    description: "Site de référencement de films, à la manière d'un AlloCiné",
  },
  {
    title: "Portfolio",
    link: "https://florent-menus.com/",
    description: "Portfolio de Florent Menus",
  },
  {
    title: "Todo list",
    link: "https://cosmic-paletas-7dd7b8.netlify.app/",
    description: "Application de gestion de tâches",
  },
  {
    title: "Générateur Pokémon",
    link: "https://random-pokemon-flomenus.netlify.app/",
    description: "Générateur de Pokémon aléatoire",
  },
];

export default function Projects() {
  return (
    <section className={style.projects}>
      <div className={style.projects_main}>
        <h3 className={style.title}>
          MES <span>PROJETS</span>
        </h3>
        <div className={style.projects_container}>
          {projects.map((project, index) => (
            <div key={index} className={style.project}>
              <h4 className={style.project_title}>{project.title}</h4>
              <Link
                // href={"projects" + project.link}
                href={project.link}
                className={style.project_link}
                target="_blank "
              >
                Consulter
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
