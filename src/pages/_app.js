import "@/styles/globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect, createContext } from "react";
import { FavouriteProvider } from "../pages/context/favouriteContext";
import { CartProvider } from "../pages/context/cartProvider";

import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => setLoggedIn(false);
  return (
    <main className={rubik.className}>
      <Header />
      <FavouriteProvider>
        <CartProvider>
          <Component
            {...pageProps}
            loggedIn={loggedIn}
            logIn={logIn}
            logOut={logOut}
          />
        </CartProvider>
      </FavouriteProvider>
      <Footer />
    </main>
  );
}
