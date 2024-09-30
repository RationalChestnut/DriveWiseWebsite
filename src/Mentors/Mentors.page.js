import React from "react";
import styles from "./Mentors.module.css";
import vijay from "../assets/vijay.jpg";
import arun from "../assets/arun.jpeg";
import yash from "../assets/yash.jpeg";
import pranav from "../assets/pranav.jpeg";
import brian from "../assets/brian.jpeg";
import ronan from "../assets/ronan.webp";

const people = [
  {
    image: vijay,
    name: "Vijay Dixit",
    link: "http://shreyadixit.org/eyeda/",
  },
  {
    image: arun,
    name: "Arun Batchu",
    link: "http://shreyadixit.org/eyeda/",
  },
  {
    image: yash,
    name: "Yash Dagade",
    link: "https://www.yashdagade.com/",
  },
  {
    image: pranav,
    name: "Pranav Ponnusamy",
    link: "https://pranavponnusamy.com/",
  },
  {
    image: brian,
    name: "Brian Mason",
    link: "https://briankmason.com/",
  },
  {
    image: ronan,
    name: "Ronan Takizawa",
    link: "https://linktr.ee/ronantech",
  },
];

export const Mentors = () => {
  return (
    <div>
      <h1 className={styles.title}>Team</h1>
      <div className={styles.row}>
        {people.map((person) => {
          return (
            <a
              className={styles.name}
              href={person.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.card}>
                <img src={person.image} className={styles.photo} alt="Vijay" />
                <p>{person.name}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
