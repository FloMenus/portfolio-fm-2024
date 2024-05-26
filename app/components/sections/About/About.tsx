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
              "Je suis un développeur web passionné par la création de sites web et d'applications. Je suis spécialisé dans le développement front-end et j'utilise les dernières technologies pour créer des interface utilisateurs modernes et intuitives."
            }
          </p>
          <p className={style.paragraph}>
            {
              "Fort de mon experience acquise en alternance, je suis capable de travailler en équipe et de m'adapter à des environnements de travail variés. Je suis également capable de travailler en autonomie et de gérer des projets de A à Z."
            }
          </p>
          <p className={style.paragraph}>
            {
              "Je suis toujours à la recherche de nouveaux projets et de nouveaux challenges. N'hésitez pas à me contacter pour discuter de votre projet !"
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
