import Image from "next/image";
import style from "./style.module.css";

export default function About() {
  return (
    <section className={style.about}>
      <h3 className={style.title}>
        À PROPOS DE <span>MOI</span>
      </h3>
      <div className={style.text_and_image}>
        <div className={style.text_container}>
          <article className={style.text}>
            <h4 className={style.subtitle}>Age :</h4>
            <p className={style.info}>25 ans</p>
          </article>
          <article className={style.text}>
            <h4 className={style.subtitle}>Formations :</h4>
            <p className={style.info}>
              {"DEUST Webmaster & Métiers de l'Internet"}
              <br />
              {"Titre professionnel Développeur Web & Web Mobile"}
            </p>
          </article>
          <article className={style.text}>
            <h4 className={style.subtitle}>Languages :</h4>
            <p className={style.info}>
              {"Pour les humains: français et anglais, pour le reste :"}
              <br /> {"Javascript, Typescript, SQL et un peu de Java !"}
            </p>
          </article>
          <article className={style.text}>
            <h4 className={style.subtitle}>Localités :</h4>
            <p className={style.info}>{"Paris & Melun (77)"}</p>
          </article>
          <article className={style.text}>
            <h4 className={style.subtitle}>Passions :</h4>
            <p className={style.info}>{"Football, eSport, Hardware"}</p>
          </article>
          <article className={style.text}>
            <h4 className={style.subtitle}>Talent caché :</h4>
            <p className={style.info}>
              {"Transformation du café en code fonctionnel ☕"}
            </p>
          </article>
        </div>
        <Image
          src="/assets/fm-image.png"
          alt="florent-menus"
          width={291}
          height={350}
          className={style.image}
        />
      </div>
    </section>
  );
}
