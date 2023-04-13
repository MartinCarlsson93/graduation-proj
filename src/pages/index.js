import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Card from "./Components/card/Card";
import search from "../../public/Assets/svgs/Search.svg";
import { useState, useEffect, createContext } from "react";
import Modal from "./Components/modal/Modal";
import { useCart } from "../components/context/cartProvider.js";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart, removeFromCart } = useCart();

  const fetchData = () => {
    fetch("/Data/food.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(fetchData, []);

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  useEffect(() => {
    if (textInput) {
      const filtered = filteredProducts.filter((product) => {
        return product.title.toLowerCase().includes(textInput.toLowerCase());
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [textInput]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <main className="main-container">
        <div>
          <div className={styles.herocontainer}>
            <h1>Grocify</h1>
            <div className={styles.searchbox}>
              <input
                className={styles.searchbar}
                type="text"
                placeholder="Search product"
                onChange={handleChange}
              />
              <Image src={search} alt="search" width={50} height={50} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.grid}>
              {filteredProducts.map((product) => (
                <div onClick={() => handleCardClick(product)}>
                  <Card
                    key={product.title}
                    name={product.title}
                    description={product.description}
                    image={`/Assets/images/${product.filename}`}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {isModalOpen && (
          <Modal
            product={selectedProduct}
            closeModal={handleModalClose}
            onAddToCart={(item) => addToCart(item)}
          />
        )}
      </main>
    </>
  );
}
