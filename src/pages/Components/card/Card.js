import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, description, image, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <p style={{ height: "110px" }}>{description}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default Card;
