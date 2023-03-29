import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ShoppingCart from "../../../public/ShoppingCart.svg";
import hamburgerMenu from "../../../public/hamburgerMenu.svg"

function Header() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const isActive = (pathname) => router.pathname === pathname;

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="header">
      <a href="/">
        <Image
          src="/Web-logo.png"
          alt="Grocify-logo"
          width={240}
          height={100}
        />
      </a>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <Image
          src={hamburgerMenu}
          alt="Hamburger menu"
          width={30}
          height={30}
        />
        </button>
      {/* <nav>
        <ul className={menuVisible ? "nav-links visible" : "nav-links"}>
          <li>
            <Image
              src="/userCircle.svg"
              alt="userCircle"
              width={30}
              height={30}
            />
            <Image
              src={ShoppingCart}
              alt="Shopping-cart"
              width={30}
              style={{ marginLeft: "10px" }}
            />
          </li>
        </ul>
      </nav> */}
      <nav>
        <ul className={menuVisible ? "nav-links visible" : "nav-links"}>
          <li>
            <Image
              src="/userCircle.svg"
              alt="userCircle"
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/login")}
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
