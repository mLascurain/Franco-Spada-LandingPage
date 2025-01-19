import React from "react";
import styles from "./PresentationSection.module.css";
import presentacion from "../../assets/franco.jpeg";

const PresentationSection: React.FC = () => {
  return (
    <section id="home" className={styles.presentationContainer}>
      <div className={styles.presentation}>
        <div className={styles.image}>
          <img src={presentacion} alt="Foto de presentación" />
        </div>
        <div className={styles.text}>
          <h1>Hello there, I'm Franco</h1>
          <p>
            I help creators and brands grow their business through the power of
            social media. Let’s make something amazing together.
          </p>
          <a href="#book">
            <button type="button" className={styles.button}>
              Work with me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
