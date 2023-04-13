import React, { useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
import formstyles from "../styles/form.module.css";

function ForgottPass() {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let users = require("../../public/Data/person.json");

    const inputUserName = event.target.username.value;

    for (let i = 0; i < users.length; i++) {
      if (users[i].username === inputUserName) {
        setAnswer(users[i].password);
        break;
      } else {
        setAnswer("No user found");
      }
    }
  };

  useEffect(() => {
    if (answer) {
      console.log(answer);
    }
  }, [answer]);

  return (
    <div className="main-container">
      <Hero header="Forgot password" />
      <form className={formstyles.formstyle} onSubmit={handleSubmit}>
        <div className={formstyles.formcontainer}>
          <p>
            The password will be sent to the email associated with the userName
          </p>
          <label className={formstyles.formlabel} for="username">
            Username
          </label>
          <input
            className={formstyles.forminput}
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />

          <button className={formstyles.contentbutton} type="submit">
            Send password
          </button>

          <div style={{ marginTop: "16px" }}>
            <p style={{ fontSize: "18px", paddingLeft: "8px" }}>{answer}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgottPass;
