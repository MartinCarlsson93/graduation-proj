import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-nav">
          <button onclick="topFunction()" class="scroll-to-top" id="scroll-to-top" title="Go to top"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg></button>
            <h3>ABOUT US</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div class="footer-social">
      <h3>Follow Us</h3>
      <ul>
        <li>
          <a href="#">
          
              </a>
            </li>
            <li>
        <a href="#">
      
          </a>
          </li>
          <li>
        <a href="#">
        
        </a>
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

