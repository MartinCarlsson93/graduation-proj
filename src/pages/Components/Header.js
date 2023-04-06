import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ShoppingCart from "../../../public/Assets/svgs/ShoppingCart.svg";
import hamburgerMenu from "../../../public/Assets/svgs/hamburgerMenu.svg";
import styles from "../../styles/header.module.css";

function Header() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const isActive = (pathname) => router.pathname === pathname;

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={styles.header}>
      <a>
        <Image
          className={styles.weblogo}
          src="/Web-logo.png"
          alt="Grocify-logo"
          width={240}
          height={100}
          onClick={() => router.push("/")}
        />
      </a>

      <div className={styles.dropdown}>
        <button className={styles.hamburgermenu} onClick={toggleMenu}>
          <Image
            src={hamburgerMenu}
            alt="Hamburger menu"
            width={40}
            height={40}
          />
        </button>
        <div
          className={styles.dropdowncontent}
          style={{ display: menuVisible ? "block" : "none" }}
        >
          <div
            className={styles.dropdownitem}
            onClick={() => router.push("/my-profile")}
          >
            <Image
              src="../../../assets/svgs/userCircle.svg"
              alt="userCircle"
              width={30}
              height={30}
            />
            <p>Login</p>
          </div>
          <div
            className={styles.dropdownitem}
            onClick={() => router.push("/contact")}
          >
            <Image
              src="/assets/svgs/contactUs.svg"
              alt="Contact us"
              width={30}
              height={30}
            />
            <p>Contact Us</p>
          </div>
          <div
            className={styles.dropdownitem}
            onClick={() => router.push("/favourites")}
          >
            <Image
              src="/assets/svgs/Favourites.svg"
              alt="Favourite"
              width={30}
              height={30}
            />
            <p>Favourite</p>
          </div>
          <div
            className={styles.dropdownitem}
            onClick={() => router.push("/cart")}
          >
            <Image
              src="/assets/svgs/ShoppingCart.svg"
              alt="Shopping Cart"
              width={30}
              height={30}
            />
            <p>Shopping Cart</p>
          </div>
        </div>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <Image
              src="/assets/svgs/userCircle.svg"
              alt="userCircle"
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/my-profile")}
            />
            <Image
              src={ShoppingCart}
              alt="Shopping-cart"
              width={30}
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={() => router.push("/cart")}
            />
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <button onClick={() => router.push("/contact")}>Contact us</button>
          </li>
          <li className={isActive("/favourites") ? "active" : ""}>
            <button onClick={() => router.push("/favourites")}>
              Favourites
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
