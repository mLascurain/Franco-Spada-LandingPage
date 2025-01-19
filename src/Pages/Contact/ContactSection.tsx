import React, { RefObject } from "react";
import styles from "./ContactSection.module.css";

interface ContactSectionProps {
  sendEmail: (e: React.FormEvent) => void;
  form: RefObject<HTMLFormElement>;
  status: string | null;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  sendEmail,
  form,
  status,
}) => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me!</h2>
      <p>If you have any questions, feel free to write me:</p>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
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
  );
};

export default ContactSection;
