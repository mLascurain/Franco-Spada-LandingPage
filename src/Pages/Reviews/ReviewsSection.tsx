import React, { useState, useEffect } from "react";
import styles from "./ReviewsSection.module.css";
import reviewImage from "../../assets/franco.jpeg";

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

const ReviewsSection: React.FC = () => {
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

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
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
  );
};

export default ReviewsSection;
