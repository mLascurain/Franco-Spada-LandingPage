import React from "react";
import styles from "./Home.module.css";
import presentacion from "../../assets/franco.jpeg";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <section className={styles.presentationContainer}>
        <div className={styles.presentation}>
          <div className={styles.text}>
            <h1>Hello there, I'm Franco.</h1>
            <p>
              I help creators and brands grow their business through the power
              of social media. Let’s make something amazing together.
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
