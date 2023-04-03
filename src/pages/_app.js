import "@/styles/globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";

// import { Rubik } from "next/font/google";

// const rubik = Rubik({
//   weight: ["400", "600"],
//   style: ["normal", "italic"],
// });

export default function App({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const logIn = () => setLoggedIn(true);
  return (
    <main>
      <Header />
      <Component {...pageProps} loggedIn={loggedIn} logIn={logIn} />
      <Footer />
    </main>
  );
}
