import React, { useState } from "react";
import styles from "./Home.module.css";
import presentacion from "../../assets/franco.jpeg";
import reviewImage from "../../assets/franco.jpeg";
import service from "../../assets/service.jpeg";
import { useEffect } from "react";

const Home: React.FC = () => {
  const reviews = [
    {
      name: "María Gómez",
      comment: "¡Excelente experiencia! Franco es un profesional increíble.",
      image: reviewImage,
      service: "Social media creator",
    },
    {
      name: "Juan Pérez",
      comment: "El trabajo de Franco superó nuestras expectativas.",
      image: reviewImage,
      service: "Content Creator",
    },
    {
      name: "Lucía López",
      comment: "Recomiendo a Franco 100%. Muy talentoso y dedicado.",
      image: reviewImage,
      service: "CM",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");

  const handleNext = () => {
    setAnimation(styles.fadeOutLeft);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setAnimation(styles.fadeInRight);
    }, 300);
  };

  const handlePrev = () => {
    setAnimation(styles.fadeOutRight);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
      setAnimation(styles.fadeInLeft);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.home}>
      <section id="home" className={styles.presentationContainer}>
        <div className={styles.presentation}>
          <div className={styles.text}>
            <h1>Hello there, I'm Franco</h1>
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

      <section id="services" className={styles.projects}>
        <h2>My Services</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={service} alt="Proyecto 1" className={styles.cardImage} />
            <h3>Service 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="/">Learn More</a>
          </div>
          <div className={styles.card}>
            <img src={service} alt="Proyecto 2" className={styles.cardImage} />
            <h3>Service 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="/">Learn More</a>
          </div>
          <div className={styles.card}>
            <div>
              <img
                src={service}
                alt="Proyecto 3"
                className={styles.cardImage}
              />
              <h3>Service 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <a href="/">Learn More</a>
          </div>
        </div>
        <a href="https://calendly.com/" target="_blank">
          <button type="button" className={styles.button}>
            Book a meeting
          </button>
        </a>
      </section>

      <section id="reviews" className={styles.reviews}>
        <h2>Client Reviews</h2>
        <div className={styles.carousel}>
          <button onClick={handlePrev} className={styles.navButton}>
            &#8249;
          </button>
          <div className={`${styles.review} ${animation}`}>
            <h4 className={styles.service}>
              {"Service: " + reviews[currentIndex].service}
            </h4>
            <img
              src={reviews[currentIndex].image}
              alt={"Foto de " + reviews[currentIndex].name}
              className={styles.reviewImage}
            />
            <p className={styles.comment}>"{reviews[currentIndex].comment}"</p>
            <h3 className={styles.name}>- {reviews[currentIndex].name}</h3>
          </div>
          <button onClick={handleNext} className={styles.navButton}>
            &#8250;
          </button>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <h2>Contact Me!</h2>
        <p>If you have any questions, feel free to write me:</p>
        <form>
          <div>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea
              placeholder="Your message"
              rows={5}
              required
              style={{ resize: "none" }}
            ></textarea>
            <button type="submit" className={styles.button}>
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Home;
