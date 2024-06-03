import Image from "next/image";
import style from "./style.module.css";

export default function About() {
  return (
    <section className={style.about}>
      <h3 className={style.title}>
        À PROPOS DE <span>MOI</span>
      </h3>
      <div className={style.text_and_image}>
        <article className={style.text}>
          <p className={style.paragraph}>
            {
              "Je suis un développeur web passionné par la création de sites web et d'applications, avec des compétences en développement fullstack. J'aime explorer les dernières technologies pour créer des interfaces utilisateurs modernes et intuitives, tout en assurant des architectures back-end performantes et sécurisées."
            }
          </p>
          <p className={style.paragraph}>
            {
              "Mon expérience en alternance m'a permis de développer une grande capacité d'adaptation et de collaboration au sein d'une équipe. Je suis également à l'aise en autonomie, capable de mener un projet de A à Z, de l'analyse des besoins à la mise en production."
            }
          </p>
          <p className={style.paragraph}>
            {
              "Actuellement à la recherche de mon premier CDI, je suis enthousiaste à l'idée de mettre à profit mes compétences au sein d'une équipe dynamique et innovante. Passionné par les nouvelles technologies et toujours curieux d'apprendre, je suis prêt à relever de nouveaux défis et à contribuer activement à la réussite des projets de votre entreprise. N'hésitez pas à me contacter pour discuter de vos besoins et de la manière dont je peux apporter une valeur ajoutée à votre équipe !"
            }
          </p>
        </article>
        {/* <div className={style.image_container}> */}
        <Image
          src="/assets/fm-image.png"
          alt="florent-menus"
          width={291}
          height={350}
          className={style.image}
        />
        {/* <Image
            src="/assets/shape4.svg"
            className={style.shape2}
            alt="shape2"
            width={434}
            height={489}
          /> */}
        {/* </div> */}
      </div>
    </section>
  );
}
