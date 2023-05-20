import React from "react";
import styles from "./SectionHeading.module.css";

const SectionTitle = (props) => {
  return (
    <div className={styles.pageTitle}>
      <h2 style={{ color: props.titleColor }}>{props.title}</h2>
      <span style={{ color: props.smallTileColor }}>{props.smallTile}</span>
    </div>
  );
};

export default SectionTitle;
