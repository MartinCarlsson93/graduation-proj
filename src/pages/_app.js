import "@/styles/globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect, createContext } from "react";
import { FavouriteProvider } from "../pages/context/favouriteContext";

import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [addToCart, setAddToCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const logIn = () => setLoggedIn(true);
  return (
    <main className={rubik.className}>
      <Header />
      <FavouriteProvider>
        <Component {...pageProps} loggedIn={loggedIn} logIn={logIn} />
      </FavouriteProvider>
      <Footer />
    </main>
  );
}
