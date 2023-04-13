import React, { useState } from "react";
import contactstyles from "../styles/contactus.module.css";
import formstyles from "../styles/form.module.css";
import Hero from "../components/hero/Hero";
import Image from "next/image";
import phone from "../../public/Assets/svgs/contactUs.svg";
import envelope from "../../public/Assets/svgs/Envelope.svg";

function ContactForm() {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      phonenr: event.target.phonenr.value,
      textmessage: event.target.textmessage.value,
      email: event.target.email.value,
    };

    const JSONData = JSON.stringify(data);

    console.log(JSONData);

    setAnswer(
      `${event.target.name.value} have submitted a phonenumber: ${event.target.phonenr.value} and email: ${event.target.email.value} as contact information regarding this contact request of: ${event.target.textmessage.value}`
    );
    // Handle form submission here
  };

  return (
    <div className="main-container">
      <Hero header="Contact us" />
      <div className={contactstyles.cardContainer}>
        <div className={contactstyles.card}>
          <div>
            <h2>Contact us by letter</h2>
            <p>123 Main Street</p>
            <p>Suite 100</p>
            <p>Solna Sweden</p>
          </div>
          <Image
            style={{ margin: "16px" }}
            src={envelope}
            alt="our logo for email"
            width={50}
            height={50}
          />
        </div>
        <div className={contactstyles.card}>
          <Image
            src={phone}
            style={{ margin: "16px" }}
            alt="a logo of a telephone"
            width={50}
            height={50}
          />
          <div>
            <h2>Contact us by phone</h2>
            <p>+46 770-555 555</p>
            <p>Opening hours:</p>
            <p>Monday to Friday</p>
            <p> 9:00 AM to 5:00 PM </p>
          </div>
        </div>
      </div>
      <div>
        <form className={formstyles.formstyle} onSubmit={handleSubmit}>
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

            <div style={{ marginTop: "16px" }}>
              <p style={{ fontSize: "18px", paddingLeft: "8px" }}>{answer}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
