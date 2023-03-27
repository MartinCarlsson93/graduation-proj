import "@/styles/globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={rubik.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
