import React from "react";
import { Contact } from "./Contact/Contact.page";
import { Landing } from "./Landing/Landing.page";
import styles from "./MainNavigator.module.css";
import { Features } from "./Features/Features.page";

export const MainNavigator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Landing />
        <Features />
        <Contact />
      </div>
    </div>
  );
};
