import React, { useState, useRef } from "react";
import styles from "./Home.module.css";
import emailjs from "@emailjs/browser";
import PresentationSection from "../Presentation/PresentationSection.tsx";
import ServicesSection from "../Services/ServicesSection.tsx";
import ReviewsSection from "../Reviews/ReviewsSection.tsx";
import ContactSection from "../Contact/ContactSection.tsx";
import "../../index.css";

const Home: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      setStatus("Form reference is not valid.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setStatus("An error occurred. Please try again later.");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        setStatus("Message sent successfully!");
        if (form.current) {
          form.current.reset();
        }
      },
      (error) => {
        console.error("Error sending email:", error.text || error);
        setStatus(
          "An error occurred while sending the email. Please try again."
        );
      }
    );
  };

  return (
    <div className={styles.home}>
      <PresentationSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection sendEmail={sendEmail} form={form} status={status} />
    </div>
  );
};

export default Home;
