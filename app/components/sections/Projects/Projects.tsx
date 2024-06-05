import style from "./style.module.css";
import Link from "next/link";
import { projects } from "../../../data/projects";

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
