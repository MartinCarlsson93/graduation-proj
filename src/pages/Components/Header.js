import React, { useState } from "react";
import { useRouter } from "next/router";
import weblogo from "../../../public/Web-logo.png";
import Image from "next/image";
import ShoppingCart from "../../../public/ShoppingCart.svg"

function Header() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const isActive = (pathname) => router.pathname === pathname;

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div className="header">
      <Image src={weblogo} alt="Grocify-logo" width={240} height={180} />
      <nav>
        <ul className={menuVisible ? "nav-links visible" : "nav-links"}>
        <Image src={ShoppingCart} alt="Shopping-cart" width={50} height={50} />
          <li className={isActive("/") ? "active" : ""}>
            <button onClick={() => router.push("/")}>Home</button>
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <button onClick={() => router.push("/contact")}>Contact us</button>
          </li>
          <li className={isActive("/campaigns") ? "active" : ""}>
            <button onClick={() => router.push("/campaigns")}>Campaigns</button>
          </li>
          <li className="dropdown">
        <button className="dropbtn">
          More
          <div className="arrow-down"></div>
        </button>
        <div className="dropdown-content">
          <a href="#">Subpage 1</a>
          <a href="#">Subpage 2</a>
          <a href="#">Subpage 3</a>
        </div>
      </li>

        </ul>
  
       

      </nav>
    </div>
  );
}

export default Header;


