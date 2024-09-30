import React from "react";
import styles from "./Association.module.css";
import shreya from "../assets/shreya.png";
import eyeda from "../assets/eyeda.png";

export const Association = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>In Association With</h1>
      <div className={styles.container}>
        <a
          href="https://shreyadixit.org"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <img src={shreya} alt="Shreya" />
        </a>
        <a
          href="http://shreyadixit.org/eyeda/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <img src={eyeda} alt="Eyeda" />
        </a>
      </div>
    </div>
  );
};
