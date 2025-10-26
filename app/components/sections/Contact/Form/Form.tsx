"use client";
import style from "./style.module.css";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

interface FormData {
  lastName: string;
  firstName: string;
  mail: string;
  message: string;
}

interface FormErrors {
  lastName?: string;
  firstName?: string;
  mail?: string;
  message?: string;
}

type ToastType = "success" | "error" | null;

export default function Form() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    firstName: "",
    mail: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: ToastType; message: string }>({
    type: null,
    message: "",
  });

  useEffect(() => {
    if (!publicKey) {
      return;
    }
    emailjs.init(publicKey);
  }, [publicKey]);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Le prénom doit contenir au moins 2 caractères";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Le nom doit contenir au moins 2 caractères";
    }

    if (!formData.mail.trim()) {
      newErrors.mail = "L'email est requis";
    } else if (!validateEmail(formData.mail)) {
      newErrors.mail = "L'email n'est pas valide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    return newErrors;
  };

  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      const newErrors = validateForm();
      setErrors(newErrors);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData, touched]);

  const showToast = (type: ToastType, message: string) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast({ type: null, message: "" });
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      firstName: true,
      lastName: true,
      mail: true,
      message: true,
    });

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      showToast("error", "Veuillez corriger les erreurs du formulaire");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      showToast("error", "Configuration EmailJS manquante. Contactez l'administrateur.");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        firstName: formData.firstName,
        LastName: formData.lastName,
        mail: formData.mail,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams);

      showToast("success", "Message envoyé avec succès ! 🚀");
      setFormData({
        lastName: "",
        firstName: "",
        mail: "",
        message: "",
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      showToast("error", "Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched({ ...touched, [field]: true });
  };

  const isFormValid = Object.keys(validateForm()).length === 0;

  return (
    <div className={style.form}>
      {toast.type && (
        <div className={`${style.toast} ${style[`toast_${toast.type}`]}`}>
          <span>{toast.message}</span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className={style.input_container}>
          <label htmlFor="firstName" className={style.label}>Prénom</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            onBlur={() => handleBlur("firstName")}
            className={touched.firstName && errors.firstName ? style.input_error : ""}
          />
          {touched.firstName && errors.firstName && (
            <span className={style.error_message}>{errors.firstName}</span>
          )}
        </div>

        <div className={style.input_container}>
          <label htmlFor="lastName" className={style.label}>Nom</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Nom"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            onBlur={() => handleBlur("lastName")}
            className={touched.lastName && errors.lastName ? style.input_error : ""}
          />
          {touched.lastName && errors.lastName && (
            <span className={style.error_message}>{errors.lastName}</span>
          )}
        </div>

        <div className={style.input_container}>
          <label htmlFor="mail" className={style.label}>Email</label>
          <input
            id="mail"
            type="email"
            name="mail"
            placeholder="Email"
            value={formData.mail}
            onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
            onBlur={() => handleBlur("mail")}
            className={touched.mail && errors.mail ? style.input_error : ""}
          />
          {touched.mail && errors.mail && (
            <span className={style.error_message}>{errors.mail}</span>
          )}
        </div>

        <div className={style.input_container}>
          <label htmlFor="message" className={style.label}>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            onBlur={() => handleBlur("message")}
            className={touched.message && errors.message ? style.input_error : ""}
          ></textarea>
          {touched.message && errors.message && (
            <span className={style.error_message}>{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={style.button}
        >
          {isSubmitting ? (
            <span className={style.spinner}></span>
          ) : (
            "Envoyer"
          )}
        </button>
      </form>
    </div>
  );
}
