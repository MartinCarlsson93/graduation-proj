import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";
import Hero from "./Components/hero/Hero";

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
    <div className="main-container">
      <Hero header="Contact us" />
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

        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <label className="form-label" for="name">
                Name
              </label>
              <input
                className="userName"
                type="text"
                placeholder="Enter Name"
                name="name"
                required
              />

              <label className="form-label" for="phonenr">
                Phonenumber
              </label>
              <input
                className="userName"
                type="tel"
                placeholder="Enter Phonenumber"
                name="phonenr"
              />

              <label className="form-label" for="email">
                Email
              </label>
              <input
                className="userName"
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />

              <label className="form-label" for="textmessage">
                Type Message
              </label>
              <textarea
                className="userName"
                type="text"
                rows={10}
                placeholder="Write message"
                name="textmessage"
                required
              />

              <button className="content-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
