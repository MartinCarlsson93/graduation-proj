import styles from "../../../styles/modal.module.css";
import Image from "next/image";
import plus from "../../../../public/Assets/svgs/Add.svg";
import minus from "../../../../public/Assets/svgs/Remove.svg";
import { useState } from "react";

const Modal = ({ product, closeModal }) => {
  const [quantity, setQuantity] = useState(0);

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
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <Image
          src={`/Assets/svgs/close.svg`}
          width={40}
          height={40}
          onClick={closeModal}
        />
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
