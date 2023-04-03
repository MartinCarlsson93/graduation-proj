import React, { useState } from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import plus from "../../../../public/Assets/svgs/Add.svg";
import minus from "../../../../public/Assets/svgs/Remove.svg";
import favourites from "../../../../public/Assets/svgs/Favourites.svg";
import campain from "../../../../public/Assets/svgs/Campain.svg";

const Card = ({ name, description, image }) => {
  const [quantity, setQuantity] = useState(0);
  const [isFavourite, setIsFavourite] = useState([]);
  const [addCart, setAddCart] = useState([]);

  const addToCart = () => {
    console.log(`Adding ${quantity} of ${name} to cart`);
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
      <div className={styles.icons}>
        <Image src={favourites} alt="favourites" width={30} height={30} />
        <Image src={campain} alt="campain" width={30} height={30} />
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p style={{ height: "80px" }}>{description}</p>
        <div className={styles.quantity}>
          <Image
            src={minus}
            alt="minus"
            width={30}
            height={30}
            onClick={decrementQuantity}
          />
          <span className={styles.quantityValue}>{quantity}</span>
          <Image
            src={plus}
            alt="plus"
            width={30}
            height={30}
            onClick={incrementQuantity}
          />
        </div>
        <button className={styles.addToCartButton} onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
