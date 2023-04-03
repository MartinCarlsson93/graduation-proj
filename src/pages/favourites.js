import React from "react";
import Hero from "./Components/hero/Hero";
import styles from "@/styles/Home.module.css";
import FavouriteCard from "./Components/card/FavourtieCard";
import { FavouriteContext } from "@/pages/context/favouriteContext";
import { useState, useEffect, useContext, useCallback } from "react";

function Favourite() {
  const { items } = useContext(FavouriteContext);
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    setProducts(items);
  };

  useEffect(fetchData, []);

  return (
    <div className="main-container">
      <main className="main-container">
        <Hero header="Favourites" />
        <div>
          <div className={styles.content}>
            <div className={styles.grid}>
              {products.map((product) => (
                <FavouriteCard
                  key={product.id}
                  name={product.title}
                  description={product.description}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Favourite;
