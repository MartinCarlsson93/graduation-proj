import React from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const isActive = (pathname) => router.pathname === pathname;

  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <nav>
        <ul>
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
            <button className="dropbtn">More</button>
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
