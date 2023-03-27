import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Card from "./Components/Card";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(fetchData, []);

  console.log(products);

  return (
    <>
      <Head>
        <title>JAM Shopper</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <h1>Index Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
            pulvinar sapien, quis varius lacus euismod et. Etiam id
          </p>
          <div className="body">
            {products.length &&
              products.map((_product, index) => {
                return (
                  <div className="grid">
                    <Card
                      key={index}
                      name={_product.title}
                      description={_product.description}
                    >
                      {_product.title}
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}
