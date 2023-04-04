import styles from "@/styles/modal.module.css";
import Image from "next/image";

const Modal = ({ product, closeModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
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
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
