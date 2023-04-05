import { useContext } from "react";
import { FavouriteContext } from "@/pages/context/favouriteContext";
import Hero from "./Components/hero/Hero";
import styles from "@/styles/Home.module.css";
import FavouriteCard from "./Components/card/FavourtieCard";

function Favourite() {
  const { state } = useContext(FavouriteContext);

  return (
    <div className="main-container">
      <main className="main-container">
        <Hero header="Favourites" />
        <div>
          <div className={styles.content}>
            <div className={styles.grid}>
              {state.items.map((item) => (
                <FavouriteCard
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  image={item.image}
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
