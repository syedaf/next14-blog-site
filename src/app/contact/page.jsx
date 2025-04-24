// const ContactPage = () => {
//   return <div>Contact Page</div>;
// };
// export default ContactPage;

// src/app/contact/page.jsx
import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          {/* Placeholder for the illustration image */}
          <Image
            src="/contact.png"
            alt="Contact illustration"
            width={500}
            height={500}
            className={styles.contactImage}
          />
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Name and Surname"
              className={styles.input}
            />

            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
            />

            <input
              type="tel"
              placeholder="Phone Number (Optional)"
              className={styles.input}
            />

            <textarea
              placeholder="Message"
              className={styles.textarea}
              rows={5}
            />

            <button type="submit" className={styles.submitButton}>
              Send
            </button>
          </form>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerBrand}>lamadev</div>
        <div className={styles.footerCopyright}>
          Lama creative thoughts agency © All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
