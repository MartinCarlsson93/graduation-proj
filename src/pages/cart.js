import React, { useState } from "react";
import Hero from "./Components/hero/Hero";
import styles from "../styles/cart.module.css";
import Card from "./Components/card/Card.js";
import { useRouter } from "next/router";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  const addItem = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      updateItemQuantity(item.id, existingItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  function CartItem({ item, updateItemQuantity, removeItem }) {
    return (
      <div className="cart-item">
        <Card
          name={item.name}
          description={`Price: $${item.price}`}
          image={null}
        />
      </div>
    );
  }

  const updateItemQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      setCartItems(updatedCartItems);
    }
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
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
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateItemQuantity={updateItemQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>
      <div>
        <span>Total: ${calculateTotal()}</span>
      </div>
      <div className={styles.checkout}>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
