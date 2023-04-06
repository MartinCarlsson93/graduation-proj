import React from "react";
import styles from "./Card.module.css";

const Card = ({
  name,
  description,
  image,
  price,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { items, addToFavourites } = useContext(FavouriteContext);

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

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
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

export default Card;
