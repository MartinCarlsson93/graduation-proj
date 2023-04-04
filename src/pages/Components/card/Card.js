import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import favourites from "../../../../public/Assets/svgs/Favourites.svg";
import campain from "../../../../public/Assets/svgs/Campain.svg";
import { FavouriteContext } from "@/pages/context/favouriteContext";

const Card = ({ name, description, image }) => {
  const { items, addToFavourites } = useContext(FavouriteContext);

  const addFavourite = () => {
    const item = {
      name: name,
      description: description,
      image: image,
    };
    if (!items.includes(item.name)) {
      addToFavourites(item);
    }
  };

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
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <p style={{ height: "80px" }}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
