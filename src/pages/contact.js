import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("phone");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>Contact us by letter</h2>
          <p>123 Main Street</p>
          <p>Suite 100</p>
          <p>Anytown USA</p>
        </div>
        <div className={styles.card}>
          <h2>Contact us by phone</h2>
          <p>+46770-555 555</p>
          <p>Opening hours:</p>
          <p>Monday to Friday</p>
          <p> 9:00 AM to 5:00 PM </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles["form-field"]}>
            <label className={styles["label-container"]} htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles["form-field"]}>
            <label htmlFor="phoneNumber">Phone number:</label>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className={styles["form-field"]}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles["form-field"]}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={styles["form-field"]}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
