import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import favourites from "../../../../public/Assets/svgs/IsFavourite.svg";
import { FavouriteContext } from "@/pages/context/favouriteContext";

const Card = ({ name, description, image }) => {
  const [quantity, setQuantity] = useState(0);
  const { items, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);

  const addToCart = () => {
    console.log(`Adding of ${name} to cart`);
  };

  const removeFavourite = () => {
    const item = {
      name: name,
      description: description,
      image: image,
    };

    removeFromFavourites(item.id);
  };

  console.log(items);
  console.log(items[0]);

  return (
    <div className={styles.card}>
      <div className={styles.icons}>
        <Image
          src={favourites}
          alt="favourites"
          width={30}
          height={30}
          onClick={removeFavourite}
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={`/../public/Assets/images/${image}`}
          alt={name}
          width={150}
          height={200}
        />
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <p style={{ height: "80px" }}>{description}</p>
        <button className={styles.addToCartButton} onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
