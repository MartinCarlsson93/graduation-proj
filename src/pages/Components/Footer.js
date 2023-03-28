import React from "react";
import Link from "next/link";


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
        <div class="footer-social">
  <h3>Follow Us</h3>
  <ul>
    <li>
      <a href="#">
      <img src="../../../public/Facebook.svg" alt="Facebook" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src="../../../public/TikTok.svg" alt="TikTok" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src="../../../public/Instagram.svg" alt="Instagram" />
      </a>
    </li>
  </ul>
</div>

<img src="../../../public/circleUp.svg" alt="UpButton" />

          <div className="footer-nav">
            <h3>About Us</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to our Newsletter</h3>
            <form>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 JAM Shopper | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
