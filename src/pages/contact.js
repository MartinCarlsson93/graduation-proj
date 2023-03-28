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
          <h2>Contact us by mail</h2>
          <p>Placeholder information</p>
        </div>
        <div className={styles.card}>
          <h2>Contact us by phone</h2>
          <p>Placeholder information</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <label className={styles["label-container"]}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Phone number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Message:
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
