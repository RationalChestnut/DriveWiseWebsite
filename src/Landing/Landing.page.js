import React from "react";

import styles from "./Landing.module.css";
import landingImage from "../assets/landing.png";

export const Landing = () => {
  return (
    <div className={styles.homePageContainer} id="landing">
      <div className={styles.left}>
        <h1 className={`${styles.header} ${styles.colored}`}>
          A Safer Mapping Algorithm
        </h1>
        <p className={styles.subtitle}>
          Driving accidents are the leading cause of death among teenagers in
          the U.S. Let's change that.
        </p>
        <button className={styles.downloadButton}>Coming Soon...</button>
      </div>
      <img src={landingImage} className={styles.landingImage} alt="Landing" />
    </div>
  );
};
