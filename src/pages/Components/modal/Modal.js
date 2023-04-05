import styles from "../../../styles/modal.module.css";
import Image from "next/image";
import plus from "../../../../public/Assets/svgs/Add.svg";
import minus from "../../../../public/Assets/svgs/Remove.svg";
import favourites from "../../../../public/Assets/svgs/Favourites.svg";
import { FavouriteContext } from "@/pages/context/favouriteContext";
import { useState, useContext } from "react";

const Modal = ({ product, closeModal }) => {
  const [quantity, setQuantity] = useState(0);
  const { state, addToFavourites } = useContext(FavouriteContext);

  const addFavourite = () => {
    const item = {
      id: product.id,
      name: product.title,
      description: product.description,
      image: product.filename,
    };
    if (!state.items.some((fav) => fav.id === item.id)) {
      addToFavourites(item);
    }
  };

  const addToCart = () => {
    console.log(`Adding ${quantity} of ${product.title} to cart`);
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
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.icons}>
          <Image
            src={favourites}
            alt="favourites"
            width={30}
            height={30}
            onClick={addFavourite}
            style={{ cursor: "pointer" }}
          />
          <Image
            src={`/Assets/svgs/close.svg`}
            width={40}
            height={40}
            onClick={closeModal}
            style={{ cursor: "pointer" }}
          />
        </div>
        <h2>{product.title}</h2>
        <Image
          src={`/Assets/images/${product.filename}`}
          width={150}
          height={200}
        />
        <p>Type: {product.type}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
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
          className={quantity >= 1 ? styles.addToCartButton : styles.cartButton}
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Modal;
