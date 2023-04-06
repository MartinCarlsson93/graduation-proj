import React, { useContext } from "react";
import Hero from "./Components/hero/Hero";
import styles from "../styles/cart.module.css";
import Card from "./Components/card/CartCard.js";
import { useRouter } from "next/router";
import { FavouriteContext } from "../components/context/favouriteContext.js";
import { useCart } from "../components/context/cartProvider";

function Cart() {
  const { cartItems, addToCart, removeFromCart, updateItemQuantity } =
    useCart();
  const { favouriteCartItems } = useContext(FavouriteContext);
  const router = useRouter();

  function CartItem({ item, updateItemQuantity, removeItem }) {
    return (
      <div className="cart-item">
        <Card
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          quantity={item.quantity}
          onRemoveFromCart={() => removeFromCart(item)}
          updateItemQuantity={updateItemQuantity}
        />
      </div>
    );
  }

  const handleUpdateItemQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      updateItemQuantity(id, quantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="main-container">
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
                handleUpdateItemQuantity={handleUpdateItemQuantity}
                removeItem={removeFromCart}
              />
            ))}
      </div>
      <div>
        <span>
          <h3>Total amount: ${Math.trunc(calculateTotal())}</h3>
        </span>
      </div>
      <button className={styles.addToCartButton} onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
