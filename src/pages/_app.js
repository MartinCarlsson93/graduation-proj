import "@/styles/globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect, createContext } from "react";
import { FavouriteProvider } from "../pages/context/favouriteContext";

// import { Rubik } from "next/font/google";

// const rubik = Rubik({
//   weight: ["400", "600"],
//   style: ["normal", "italic"],
// });

export default function App({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [addToCart, setAddToCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const logIn = () => setLoggedIn(true);
  return (
    <main>
      <Header />
      <FavouriteProvider>
        <Component {...pageProps} loggedIn={loggedIn} logIn={logIn} />
      </FavouriteProvider>
      <Footer />
    </main>
  );
}
