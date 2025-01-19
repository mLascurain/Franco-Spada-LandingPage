import React, { useState } from "react";
import styles from "./Home.module.css";
import presentacion from "../../assets/franco.jpeg";
import reviewImage from "../../assets/franco.jpeg";
import serviceSocialMedia from "../../assets/social-media-marketing-concept-.jpg";
import serviceContentCreator from "../../assets/content.jpg";
import serviceConsulting from "../../assets/consulta-financiera-isometrica-o-concepto-analisis-redes-sociales-comunicacion-consultoria-empresarial_589019-4599.jpg";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Home: React.FC = () => {
  const reviews = [
    {
      name: "María Gómez",
      comment: "¡Excelente experiencia! Franco es un profesional increíble.",
      image: reviewImage,
    },
    {
      name: "Juan Pérez",
      comment: "El trabajo de Franco superó nuestras expectativas.",
      image: reviewImage,
    },
    {
      name: "Lucía López",
      comment: "Recomiendo a Franco 100%. Muy talentoso y dedicado.",
      image: reviewImage,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

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

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <section id="home" className={styles.presentationContainer}>
        <div className={styles.presentation}>
          <div className={styles.image}>
            <img src={presentacion} alt="Foto de presentación" />
          </div>
          <div className={styles.text}>
            <h1>Hello there, I'm Franco</h1>
            <p>
              I help creators and brands grow their business through the power
              of social media. Let’s make something amazing together.
            </p>
            <a href="#book">
              <button type="button" className={styles.button}>
                Work with me
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="services" className={styles.projects}>
        <h2>My Services</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div>
              <h3>Consulting Services</h3>
              <img
                src={serviceConsulting}
                alt="Proyecto 1"
                className={styles.cardImage}
              />
              <p>
                I help brands and creators design authentic, organic social
                media marketing strategies to grow their audience and build
                meaningful engagement.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <h3>Social Media Management</h3>
              <img
                src={serviceSocialMedia}
                alt="Proyecto 2"
                className={styles.cardImage}
              />
              <p>
                With years of experience in video content and podcast
                production, I create engaging content tailored to your brand’s
                voice and goals.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <h3>Content Creation</h3>
              <img
                src={serviceContentCreator}
                alt="Service 3"
                className={styles.cardImage}
              />
              <p>
                I manage and organize your social media presence with content
                scheduling, posting, and analytics to ensure consistent and
                effective growth
              </p>
            </div>
          </div>
        </div>
        <a href="https://calendly.com/franlspada" target="_blank">
          <button id="book" type="button" className={styles.button}>
            Book a Free Meeting
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
          <div className={styles.arrowsResponsove}>
            <button onClick={handlePrev} className={styles.navButtonRes}>
              &#8249;
            </button>

            <button onClick={handleNext} className={styles.navButtonRes}>
              &#8250;
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <h2>Contact Me!</h2>
        <p>If you have any questions, feel free to write me:</p>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input type="text" name="user_name" placeholder="Name" required />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
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
        {status && <p className={styles.status}>{status}</p>}
      </section>
    </div>
  );
};

export default Home;
