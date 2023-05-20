import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./TestmonialCard.module.css";

const TestimonialCard = (props) => {
  return (
    <div className={styles.card_container}>
      <p>{props.description}</p>

      <div className={styles.stars}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className={styles.name}>
        <span>{props.name}</span>
        <span>Las vegas</span>
      </div>
    </div>
  );
};
export default TestimonialCard;
