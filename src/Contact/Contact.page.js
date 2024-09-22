import React from "react";
import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <div className={styles.contactPageContainer} id="contact-us">
      <h1 className={styles.contactTitle}>Get In Touch</h1>
      <p className={styles.contactSubDescription}>
        Any questions or feedback? Just send us a message!
      </p>
      <div className={styles.contactFormContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactInformationTitle}>
            Contact Information
          </h2>
          <p className={styles.formDescription}>
            Fill out the form and our team will get back to you within 24 hours
          </p>
          <div className={styles.contactMethod}>
            <MdEmail className={styles.icon} />
            <p>team@originapps.dev</p>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form
            className={styles.form}
            action="https://getform.io/f/arolgnlb"
            method="POST"
          >
            <div className={styles.formSection}>
              <p className={styles.label}>Name</p>
              <input
                type="text"
                name="name"
                className={styles.textInput}
                placeholder="Name"
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Email</p>
              <input
                type="text"
                name="email"
                className={styles.textInput}
                placeholder="Email"
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Message</p>
              <textarea
                className={`${styles.textInput} ${styles.textarea}`}
                placeholder="Message..."
                required
                name="message"
              ></textarea>
            </div>
            <div className={styles.formSection}>
              <button
                type="text"
                className={styles.submitButton}
                placeholder="Email"
                required
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
