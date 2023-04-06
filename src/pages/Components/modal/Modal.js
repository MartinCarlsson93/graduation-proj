import styles from "../../../styles/modal.module.css";
import Image from "next/image";
import plus from "../../../../public/Assets/svgs/Add.svg";
import minus from "../../../../public/Assets/svgs/Remove.svg";
import favourites from "../../../../public/Assets/svgs/Favourites.svg";
import { FavouriteContext } from "@/components/context/favouriteContext";
import { useState, useContext } from "react";

const Modal = ({
  product,
  closeModal,
  name,
  description,
  image,
  price,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { items, addToFavourites } = useContext(FavouriteContext);

  const addFavourite = () => {
    const item = {
      name: product.title,
      description: product.description,
      image: product.filename,
    };
    if (!items.includes(item.name)) {
      addToFavourites(item);
    }
  };

  name = product.title;
  description = product.description;
  image = `/Assets/images/${product.filename}`;
  price = product.price;

  const addToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        name,
        description,
        image,
        price,
        id: name,
        quantity: parseInt(quantity, 10),
      });
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
            alt="Hej"
            width={40}
            height={40}
            onClick={closeModal}
            style={{ cursor: "pointer" }}
          />
        </div>
        <h2>{product.title}</h2>
        <Image
          src={`/Assets/images/${product.filename}`}
          alt="Hej"
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
        <button className={styles.addToCartButton} onClick={addToCart}>
          Add to cart
        </button>
        <button
          className={styles.removeFromCartButton}
          onClick={() => {
            onRemoveFromCart({ id: name });
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default Modal;
