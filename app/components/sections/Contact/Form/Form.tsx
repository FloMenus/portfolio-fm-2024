"use client";
import style from "./style.module.css";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

export default function Form() {
  const serviceId = "service_d2qpis6";
  const templateId = "template_9h1pg73";
  const publicKey = "YnlWBFjqU-hRJ7ozp";

  useEffect(() => {
    emailjs.init({
      publicKey: publicKey,
      blockHeadless: true,
      limitRate: {
        id: "app",

        throttle: 10000,
      },
    });
  }, [publicKey]);

  // Form logic
  const [isFormValid, setIsFormValid]: [
    boolean,
    (isFormValid: boolean) => void
  ] = useState(false);

  const validateEmail = (email: string): boolean => {
    return (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null
    );
  };

  const [formData, setFormData]: [
    { lastName: string; firstName: string; mail: string; message: string },
    (formData: {
      lastName: string;
      firstName: string;
      mail: string;
      message: string;
    }) => void
  ] = useState({
    lastName: "",
    firstName: "",
    mail: "",
    message: "",
  });

  useEffect(() => {
    setIsFormValid(
      formData.lastName !== "" &&
        formData.firstName !== "" &&
        formData.mail !== "" &&
        validateEmail(formData.mail) &&
        formData.message !== ""
    );
  }, [formData]);

  function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.preventDefault();
    // Email sending

    emailjs
      // @ts-ignore
      .send(serviceId, templateId, {
        lastName: formData.lastName,
        firstName: formData.firstName,
        mail: formData.mail,
        message: formData.message,
      })
      .then(
        (response) => {
          alert("Message envoyé ! 🚀");
        },
        (error) => {
          alert("Erreur lors de l'envoi du message 😢, veuillez réessayer");
        }
      );
    setFormData({
      lastName: "",
      firstName: "",
      mail: "",
      message: "",
    });
  }

  return (
    <form className={style.form}>
      <div className={style.form_group}>
        <label htmlFor="lastName" className={style.label}>
          Nom
        </label>
        <input
          type="text"
          placeholder="Nom"
          id="lastName"
          className={style.input}
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
      </div>
      <div className={style.form_group}>
        <label htmlFor="firstName" className={style.label}>
          Prénom
        </label>
        <input
          type="text"
          placeholder="Prénom"
          id="firstName"
          className={style.input}
          value={formData.firstName}
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
      </div>
      <div className={style.form_group}>
        <label htmlFor="mail" className={style.label}>
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          id="mail"
          className={style.input}
          value={formData.mail}
          onChange={(e) => {
            setFormData({ ...formData, mail: e.target.value });
          }}
        />
      </div>
      <div className={style.form_group}>
        <label htmlFor="message" className={style.label}>
          Message
        </label>
        <textarea
          placeholder="Entrez votre message ici..."
          id="message"
          className={style.input + " " + style.textarea}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
          }}
        />
      </div>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          handleSubmit(e);
        }}
        className={
          isFormValid
            ? `${style.button}`
            : `${style.button} ${style.button_disabled}`
        }
        disabled={!isFormValid}
      >
        <p className={style.button_text}>Envoyer</p>
      </button>
    </form>
  );
}
