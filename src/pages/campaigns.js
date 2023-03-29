import React from "react";
import Hero from "./Components/hero/Hero";
import styles from "@/styles/Home.module.css";
import Card from "./Components/card/Card";
import { useState, useEffect, useCallback } from "react";

function Campaigns() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(fetchData, []);

  return (
    <div className="main-container">
      <main className="main-container">
        <Hero header="Campaigns" />
        <div>
          <div className={styles.content}>
            <div className={styles.grid}>
              {products.map((product) => (
                <Card
                  key={product.id}
                  name={product.title}
                  description={product.description}
                  image={product.images[0]} // assuming the first image is the main one
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Campaigns;
