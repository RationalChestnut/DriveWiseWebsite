import React from "react";
import { Landing } from "./Landing/Landing.page";
import styles from "./MainNavigator.module.css";
import { Features } from "./Features/Features.page";
import { Nav } from "./Nav/Nav.page";

export const MainNavigator = () => {
  return (
    <div className={styles.firstContainer}>
      {/* <Nav /> */}
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <Landing />
          <Features />
        </div>
      </div>
    </div>
  );
};
