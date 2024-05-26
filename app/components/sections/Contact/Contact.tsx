import style from "./style.module.css";
import Image from "next/image";

import Form from "./Form/Form";

export default function Contact() {
  return (
    <section className={style.contact} id={"contact"}>
      <h3 className={style.title}>
        ME <span>CONTACTER</span>
      </h3>
      <div className={style.contact_container}>
        <div className={style.informations_section}>
          <p className={style.paragraph}>
            {
              "Vous avez un projet à me proposer, une question à me poser ou simplement envie de discuter ? N'hésitez pas à me contacter via le formulaire ci-dessous ou par téléphone et mail."
            }
          </p>
          <div className={style.informations}>
            <div className={style.information}>
              <Image
                src="/portfolio-fm-2024/assets/phone.png"
                alt="phone"
                width={32}
                height={32}
              />
              <p className={style.information_text}>+33 6 46 03 42 41</p>
            </div>
            <div className={style.information}>
              <Image
                src="/portfolio-fm-2024/assets/mail.png"
                alt="phone"
                width={32}
                height={32}
              />
              <p className={style.information_text}>florent.mns@gmail.com</p>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}
