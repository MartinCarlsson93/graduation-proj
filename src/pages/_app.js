import "@/styles/globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
