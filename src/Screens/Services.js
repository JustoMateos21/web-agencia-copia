import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <p>We solve your company's problems by creating amazing web pages.</p>
      <img
        className={styles.webImage}
        src={require("../assets/webImage.jpg")}
      />
    </div>
  );
};

export default Services;
