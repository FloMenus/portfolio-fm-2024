import Image from "next/image";
import style from "./style.module.css";

export default function About() {
  return (
    <section id="about" className={style.about}>
      <h2 className={style.title}>
        À PROPOS DE <span>MOI</span>
      </h2>
      <div className={style.content_wrapper}>
        {/* Header avec photo compacte */}
        <div className={style.profile_header}>
          <div className={style.profile_image}>
            <Image
              src="/assets/fm-image.png"
              alt="florent-menus"
              width={120}
              height={150}
              className={style.image}
            />
          </div>
          <div className={style.intro_text}>
            <h3 className={style.intro_title}>Développeur Web Full-Stack</h3>
            <p className={style.intro_description}>
              Développeur passionné qui transforme des idées en réalité.
              <br />
              J&apos;aime créer des interfaces fluides et résoudre des défis techniques 
              avec des solutions élégantes et adaptées aux besoins. Le code, c&apos;est un peu mon terrain de jeu !
            </p>
          </div>
        </div>

        <div className={style.info_grid}>
          {/* Informations courtes - Pills compactes */}
          <div className={style.quick_info}>
            <div className={style.info_pill}>
              <span className={style.pill_icon}>📍</span>
              <div className={style.pill_content}>
                <span className={style.pill_label}>Localité</span>
                <span className={style.pill_value}>Paris & Seine-et-Marne</span>
              </div>
            </div>
            <div className={style.info_pill}>
              <span className={style.pill_icon}>⚽</span>
              <div className={style.pill_content}>
                <span className={style.pill_label}>Passions</span>
                <span className={style.pill_value}>Football, Piano, eSport</span>
              </div>
            </div>
            <div className={style.info_pill}>
              <span className={style.pill_icon}>☕</span>
              <div className={style.pill_content}>
                <span className={style.pill_label}>Talent caché</span>
                <span className={style.pill_value}>Café → Code fonctionnel</span>
              </div>
            </div>
          </div>

          {/* Informations détaillées - Cartes étendues */}
          <div className={style.detailed_info}>
            <article className={style.detail_card}>
              <div className={style.card_header}>
                <span className={style.card_icon}>🎓</span>
                <h4 className={style.card_title}>Formations</h4>
              </div>
              <div className={style.card_content}>
                <div className={style.formation_item}>
                  <span className={style.formation_badge}>En cours</span>
                  <p className={style.formation_text}>Master Ingénierie du Web - ESGI</p>
                </div>
                <div className={style.formation_item}>
                  <span className={style.formation_badge}>2025</span>
                  <p className={style.formation_text}>Bachelor Ingénierie du Web - ESGI</p>
                </div>
                <div className={style.formation_item}>
                  <span className={style.formation_badge}>2023</span>
                  <p className={style.formation_text}>Titre professionnel Développeur Web & Web Mobile - Konexio</p>
                </div>
              </div>
            </article>

            <article className={style.detail_card}>
              <div className={style.card_header}>
                <span className={style.card_icon}>🌐</span>
                <h4 className={style.card_title}>Langues</h4>
              </div>
              <div className={style.card_content}>
                <div className={style.languages_section}>
                  <h5 className={style.lang_category}>Humaines</h5>
                  <div className={style.lang_tags}>
                    <span className={style.lang_tag}>🇫🇷 Français</span>
                    <span className={style.lang_tag}>🇬🇧 Anglais</span>
                  </div>
                </div>
                <div className={style.languages_section}>
                  <h5 className={style.lang_category}>Machines</h5>
                  <div className={style.lang_tags}>
                    <span className={style.lang_tag}>TypeScript</span>
                    <span className={style.lang_tag}>PHP</span>
                    <span className={style.lang_tag}>SQL</span>
                    <span className={style.lang_tag}>Bash</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
