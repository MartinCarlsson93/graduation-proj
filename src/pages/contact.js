import React, { useState } from "react";
import contactstyles from "../styles/contactus.module.css";
import formstyles from "../styles/form.module.css";
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
      <div className={contactstyles.cardContainer}>
        <div className={contactstyles.card}>
          <h2>Contact us by letter</h2>
          <p>123 Main Street</p>
          <p>Suite 100</p>
          <p>Anytown USA</p>
        </div>
        <div className={contactstyles.card}>
          <h2>Contact us by phone</h2>
          <p>+46770-555 555</p>
          <p>Opening hours:</p>
          <p>Monday to Friday</p>
          <p> 9:00 AM to 5:00 PM </p>
        </div>

        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className={formstyles.formcontainer}>
              <label className={formstyles.formlabel} for="name">
                Name
              </label>
              <input
                className={formstyles.forminput}
                type="text"
                placeholder="Enter Name"
                name="name"
                required
              />

              <label className={formstyles.formlabel} for="phonenr">
                Phonenumber
              </label>
              <input
                className={formstyles.forminput}
                type="tel"
                placeholder="Enter Phonenumber"
                name="phonenr"
              />

              <label className={formstyles.formlabel} for="email">
                Email
              </label>
              <input
                className={formstyles.forminput}
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />

              <label className={formstyles.formlabel} for="textmessage">
                Type Message
              </label>
              <textarea
                className={formstyles.forminput}
                type="text"
                rows={10}
                placeholder="Write message"
                name="textmessage"
                required
              />

              <button className={formstyles.contentbutton} type="submit">
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
