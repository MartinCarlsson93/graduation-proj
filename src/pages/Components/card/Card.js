import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ name, description, image }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    console.log(`Adding ${name} to cart`);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.quantity}>
          <button className={styles.quantityButton} onClick={incrementQuantity}>
            +
          </button>

          <span className={styles.quantityValue}>{quantity}</span>
          <button className={styles.quantityButton} onClick={decrementQuantity}>
            -
          </button>
        </div>
        <button className={styles.addToCartButton} onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
