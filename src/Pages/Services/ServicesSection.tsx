import React from "react";
import styles from "./ServicesSection.module.css";
import serviceSocialMedia from "../../assets/social-media.jpg";
import serviceContentCreator from "../../assets/content.jpg";
import serviceConsulting from "../../assets/consulta-financiera-isometrica-o-concepto-analisis-redes-sociales-comunicacion-consultoria-empresarial_589019-4599.jpg";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className={styles.projects}>
      <h2>My Services</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Consulting Services</h3>
          <img
            src={serviceConsulting}
            alt="Consulting Service"
            className={styles.cardImage}
          />
          <p>
            I help brands and creators design authentic, organic social media
            marketing strategies to grow their audience and build meaningful
            engagement.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Social Media Management</h3>
          <img
            src={serviceSocialMedia}
            alt="Social Media Service"
            className={styles.cardImage}
          />
          <p>
            With years of experience in video content and podcast production, I
            create engaging content tailored to your brand’s voice and goals.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Content Creation</h3>
          <img
            src={serviceContentCreator}
            alt="Content Creation Service"
            className={styles.cardImage}
          />
          <p>
            I manage and organize your social media presence with content
            scheduling, posting, and analytics to ensure consistent and
            effective growth.
          </p>
        </div>
      </div>
      <a href="https://calendly.com/franlspada" target="_blank">
        <button id="book" type="button" className={styles.button}>
          Book a Free Meeting
        </button>
      </a>
    </section>
  );
};

export default ServicesSection;
