import React from "react";

import styles from "./Landing.module.css";
import appStore from "../assets/svgs/appstore.svg";
import googlePlay from "../assets/svgs/googleplay.svg";
import landingImage from "../assets/landing.png";

export const Landing = () => {
  return (
    <div className={styles.homePageContainer} id="landing">
      <div className={styles.left}>
        <h1 className={styles.header}>Log Workouts</h1>
        <h1 className={`${styles.header} ${styles.colored}`}>Get Stronger</h1>
        <h1 className={styles.header}>Become Toji</h1>
        <p className={styles.subtitle}>
          PRLeveling is a free workout tracker for iOS and Android. Build
          routines and upgrade your rank.
        </p>
        <div className={styles.downloadImages}>
          <a href="https://apps.apple.com/app/openrpg/id6553998914">
            <img
              src={appStore}
              alt="Download on app store"
              className={`${styles.download} ${styles.imageLeft}`}
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.originapps.prleveling">
            <img
              src={googlePlay}
              alt="Download on app store"
              className={styles.download}
            />
          </a>
        </div>
      </div>
      <img src={landingImage} className={styles.landingImage} alt="Landing" />
    </div>
  );
};
