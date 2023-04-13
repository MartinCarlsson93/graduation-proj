import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        <div className={styles.footertop}>
          <div className={styles.footercontact}>
            <h3>Contact Us</h3>
            <ul>
              <li>info@Grocify.com</li>
              <li>+46 770-555 555</li>
              <li>123 Main Street, Suite 100, Solna Sweden</li>
            </ul>
          </div>
          <div className={styles.footersocial}>
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#">
                  <img src="/Assets/svgs/email.svg" alt="Email" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/Assets/svgs/Facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="Assets/svgs/Instagram.svg" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footernav}>
            <h3>Explore</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/menu">Menu</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerbottom}>
          <p>&copy; 2023 Grocify App | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
