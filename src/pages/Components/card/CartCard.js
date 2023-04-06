import React from "react";
import { useState } from "react";
import Image from "next/image";
import plus from "../../../../public/Assets/svgs/Add.svg";
import minus from "../../../../public/Assets/svgs/Remove.svg";
import trash from "../../../../public/Assets/svgs/Delete.svg";
import styles from "./Card.module.css";

const CartCard = ({
  name,
  quantity,
  image,
  price,
  updateItemQuantity,
  onRemoveFromCart,
}) => {
  const [thisquantity, setThisQuantity] = useState(quantity);

  const incrementQuantity = () => {
    setThisQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (thisquantity > 0) {
      setThisQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const removeFromCart = () => {
    if (onRemoveFromCart) {
      onRemoveFromCart();
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <div className={styles.icons}>
          <Image
            src={minus}
            alt="minus"
            width={30}
            height={30}
            onClick={decrementQuantity}
            style={{ cursor: "pointer" }}
          />
          <Image
            src={plus}
            alt="add"
            width={30}
            height={30}
            onClick={incrementQuantity}
            style={{ cursor: "pointer" }}
          />
        </div>
        <p>Quantity: {thisquantity}</p>
        <div className={styles.deletebtn}>
          <Image
            src={trash}
            alt="trash"
            width={30}
            height={30}
            onClick={removeFromCart}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
