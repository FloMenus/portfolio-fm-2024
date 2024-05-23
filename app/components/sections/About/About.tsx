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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat..
          </p>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat..
          </p>
        </article>
        <div className={style.image_container}>
          <Image
            src="/assets/fm-image.png"
            alt="florent-menus"
            width={352}
            height={398}
            className={style.image}
          />
          {/* <Image
            src="/assets/shape4.svg"
            className={style.shape2}
            alt="shape2"
            width={434}
            height={489}
          /> */}
        </div>
      </div>
    </section>
  );
}
