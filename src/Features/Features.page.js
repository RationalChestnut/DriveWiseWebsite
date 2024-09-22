import React from "react";
import styles from "./Features.module.css";

import workout from "../assets/workout.png";
import summary from "../assets/summary.png";
import challenge from "../assets/challenge.png";
import evaluation from "../assets/evaluation.png";
import { FaCircleCheck } from "react-icons/fa6";

const featuresData = [
  {
    id: 1,
    title: "Log Workouts",
    description:
      "A workout tracker that just works. Everything you need to log your workouts and smash your goals.",
    checks: [
      "Intuitive Workout Logging",
      "Advanced Routine Planner",
      "Add Exercise Notes",
      "Calisthenics And Weightlifting",
    ],
    image: workout,
  },
  {
    id: 2,
    title: "Measure Your Progress",
    description:
      "Get insights into each exercise and track your progress over time.",
    checks: [
      "Individual Exercise Ranks",
      "Ranks Based On Real Lifter Comparison Data",
      "Accounts For Bodyweight And Gender",
    ],
    image: summary,
  },
  {
    id: 3,
    title: "Discover Your Rank",
    description:
      "See how you stack up against other lifters. NO ONE has reached all S ranks yet. Will you be the first?",
    checks: ["Ranking System", "Real Lifter Comparison Data", "6 Categories"],
    image: evaluation,
  },
  {
    id: 4,
    title: "Complete Daily Challenges",
    description: "Complete daily challenges to earn points and level up.",
    checks: [
      "Difficulty Scales Based On Rank",
      "Leveling System",
      "40+ Exercises",
      "Daily Refreshes",
    ],
    image: challenge,
  },
];

export const Features = () => {
  return (
    <div className={styles.container} id="features">
      {featuresData.map((feature) => {
        return (
          <div
            className={`${styles.feature} ${
              feature.id % 2 === 0 && styles.left
            }`}
            key={feature.id}
          >
            <div
              className={`${styles.content} ${
                feature.id & (2 == 0) && styles.leftContent
              }`}
            >
              <h1 className={styles.title}>{feature.title}</h1>
              <p className={styles.description}>{feature.description}</p>
              {feature.checks.map((check) => {
                return (
                  <div className={styles.check}>
                    <FaCircleCheck className={styles.icon} />
                    <p>{check}</p>
                  </div>
                );
              })}
            </div>
            <img
              src={feature.image}
              alt={feature.title}
              className={styles.featureImage}
            />
          </div>
        );
      })}
    </div>
  );
};
