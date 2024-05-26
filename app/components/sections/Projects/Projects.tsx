import style from "./style.module.css";
import Link from "next/link";

const projects: { title: string; link: string; description: string }[] = [
  {
    title: "Site vitrine Yvea",
    link: "/yvea",
    description:
      "Site vitrine pour une plateforme de gestion automatisée de certificats d'export de marchandises",
  },
  {
    title: "Moovice",
    link: "/moovice",
    description: "Site de référencement de films, à la manière d'un AlloCiné",
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
