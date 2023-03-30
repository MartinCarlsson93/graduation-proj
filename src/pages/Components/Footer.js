import React from "react";
import Link from "next/link";
import styles from "../../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        <div className={styles.footertop}>
          <div className={styles.footercontact}>
            <h3>Contact Us</h3>
            <ul>
              <li>info@foodapp.com</li>
              <li>+1-XXX-XXX-XXXX</li>
              <li>123 Main Street, Suite 100, Anytown USA</li>
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
          <p>&copy; 2023 Food App | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
