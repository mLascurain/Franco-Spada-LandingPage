import React from "react";
import styles from "./Home.module.css";
import presentacion from "../../assets/franco.jpeg";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <section className={styles.presentationContainer}>
        <div className={styles.presentation}>
          <div className={styles.text}>
            <h1>Franco Spada</h1>
            <p>
              Hello there! I'm Franco, a passionate and creative professional
              with a background in journalism, customer support, and content
              creation. As a journalist from Universidad de La Matanza, I've
              sharpened my writing skills and developed a keen eye for detail,
              making sure my work is always both passionate and high-quality.
              When I'm not at work, you can find me hosting and producing my
              podcast, or experimenting with copywriting video and audio
              editing, and social media management. I'm always looking to take
              on new projects and help you achieve your goals.
            </p>
            <button type="button" className={styles.button}>
              Work with me
            </button>
          </div>
          <div className={styles.image}>
            <img src={presentacion} alt="Foto de presentación" />
          </div>
        </div>
      </section>

      {/* Sección de proyectos */}
      <section className={styles.projects}>
        <h2>Mis Proyectos</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Proyecto 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.card}>
            <h3>Proyecto 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.card}>
            <h3>Proyecto 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <section className={styles.contact}>
        <h2>Contacto</h2>
        <p>Si queres contactarme, no dudes en escribirme:</p>
        <form>
          <div>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo electrónico" required />
            <textarea
              placeholder="Tu mensaje"
              rows={5}
              required
              style={{ resize: "none" }}
            ></textarea>
            <button type="submit" className={styles.button}>
              Enviar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Home;
