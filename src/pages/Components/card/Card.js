import React, { useState } from "react";
import Hero from "../../Components/hero/Hero";
//import "./Cart.css";

// You can replace this with data fetched from your API
const sampleData = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 20 },
  { id: 3, name: "Item 3", price: 30 },
];

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      updateItemQuantity(item.id, existingItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

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

  return (
    <div className="main-container">
      <Hero header="Cart" />
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateItemQuantity={updateItemQuantity}
              removeItem={removeItem}
            />
          ))}
        </div>
      )}
      <button onClick={() => addItem(sampleData[0])}>+</button>
      <button onClick={() => addItem(sampleData[1])}>-</button>
      <button onClick={() => addItem(sampleData[2])}>Remove item</button>
      <button onClick={() => console.log("Implement Stripe checkout")}>
        Checkout
      </button>
    </div>
  );
}

function CartItem({ item, updateItemQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Price: ${item.price}</p>
          <div className="buttons">
            <button
              className="btn btn-primary"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span className="quantity">{item.quantity}</span>
            <button
              className="btn btn-primary"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
