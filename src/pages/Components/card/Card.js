import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import plus from "../../../../public/Assets/svgs/Add.svg";
import minus from "../../../../public/Assets/svgs/Remove.svg";
import favourites from "../../../../public/Assets/svgs/Favourites.svg";
import campain from "../../../../public/Assets/svgs/Campain.svg";
import { FavouriteContext } from "@/pages/context/favouriteContext";

const Card = ({ name, description, image, price, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const { items, addToFavourites } = useContext(FavouriteContext);

  const addToCart = () => {
    if (onAddToCart) {
      onAddToCart({ name, description, image });
    }
  };
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addFavourite = () => {
    const item = {
      name: name,
      description: description,
      image: image,
      price: price,
    };
    if (!items.includes(item.name)) {
      addToFavourites(item);
    }
  };

  console.log(items);

  return (
    <div className={styles.card}>
      <div className={styles.icons}>
        <Image
          src={favourites}
          alt="favourites"
          width={30}
          height={30}
          onClick={addFavourite}
        />
        <Image src={campain} alt="campain" width={30} height={30} />
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p style={{ height: "80px" }}>{description}</p>
        <p>Price: ${price}</p>
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
        <button
          className={styles.addToCartButton}
          onClick={() => {
            onAddToCart({ name, description, image, price, id: name });
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
