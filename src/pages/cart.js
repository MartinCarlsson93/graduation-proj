import React, { useContext } from "react";
import Hero from "./Components/hero/Hero";
import styles from "../styles/cart.module.css";
import Card from "./Components/card/Card.js";
import { useRouter } from "next/router";
import { FavouriteContext } from "../pages/context/favouriteContext.js";
import { useCart } from "./context/cartProvider";

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const { favouriteCartItems } = useContext(FavouriteContext);
  const router = useRouter();

  function CartItem({ item, updateItemQuantity, removeItem }) {
    return (
      <div className="cart-item">
        <Card
          key={item.id}
          name={item.name}
          description={`Price: $${item.price}`}
          image={item.image}
        />
        <div>
          <span>Quantity: {item.quantity}</span>
        </div>
      </div>
    );
  }

  const updateItemQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      // Implement updateItemQuantity logic in cart context
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    console.log("Implement Stripe checkout");
    router.push("/checkout");
  };

  return (
    <div className={styles.mainContainer}>
      <Hero header="Cart" />
      <div className={styles.cartItems}>
        {favouriteCartItems && Array.isArray(favouriteCartItems)
          ? [...cartItems, ...favouriteCartItems].map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateItemQuantity={updateItemQuantity}
                removeItem={removeFromCart}
              />
            ))
          : cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateItemQuantity={updateItemQuantity}
                removeItem={removeFromCart}
              />
            ))}
      </div>
      <div>
        <span>
          <h3>Total: ${calculateTotal()}</h3>
        </span>
      </div>
      <div className={styles.checkout}>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
      <div>
        <h3>Favourite items:</h3>
        <ul>
          {favouriteCartItems &&
            favouriteCartItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
