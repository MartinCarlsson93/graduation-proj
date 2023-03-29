import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ShoppingCart from "../../../public/ShoppingCart.svg";


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
        <Image src="/Web-logo.png" alt="Grocify-logo" width={240} height={180} />
      </a>
      <nav>
        <ul className={menuVisible ? "nav-links visible" : "nav-links"}>
          <li>
          <Image src="/userCircle.svg" alt="userCircle" width={30} height={30} />
            <Image src={ShoppingCart} alt="Shopping-cart" width={30} style={{marginLeft: "10px"}} />
            </li> 
            </ul>
      <Image src={weblogo} alt="Grocify-logo" width={240} height={100} />
</nav>
      <nav>
        <ul className={menuVisible ? "nav-links visible" : "nav-links"}>
          <Image
            src={ShoppingCart}
            alt="Shopping-cart"
            width={50}
            height={50}
          />
          <li className={isActive("/") ? "active" : ""}>
            <button onClick={() => router.push("/")}>Home</button>
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <button onClick={() => router.push("/contact")}>Contact us</button>
          </li>
          <li className={isActive("/campaigns") ? "active" : ""}>
            <button onClick={() => router.push("/campaigns")}>Campaigns</button>
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <button onClick={() => router.push("/contact")}>Contact Us</button>
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
