"use client";
import style from "./style.module.css";

export default function Form() {
  return (
    <form className={style.form} onSubmit={(e) => e.preventDefault()}>
      {/* Nom */}
      <div className={style.form_group}>
        <label htmlFor="lastname" className={style.label}>
          Nom
        </label>
        <input
          type="text"
          placeholder="Nom"
          id="lastname"
          className={style.input}
        />
      </div>
      {/* Prénom */}
      <div className={style.form_group}>
        <label htmlFor="firstname" className={style.label}>
          Prénom
        </label>
        <input
          type="text"
          placeholder="Prénom"
          id="firstname"
          className={style.input}
        />
      </div>
      {/* Mail */}
      <div className={style.form_group}>
        <label htmlFor="mail" className={style.label}>
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          id="mail"
          className={style.input}
        />
      </div>
      {/* Message */}
      <div className={style.form_group}>
        <label htmlFor="message" className={style.label}>
          Message
        </label>
        <textarea
          placeholder="Entrez votre message ici..."
          id="message"
          className={style.input + " " + style.textarea}
        />
      </div>
      {/* Submit */}
      <button type="submit" className={style.button}>
        <p className={style.button_text}>Envoyer</p>
      </button>
    </form>
  );
}
