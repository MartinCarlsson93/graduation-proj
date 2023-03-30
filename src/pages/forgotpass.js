import React from "react";
import Hero from "./Components/hero/Hero";
import formstyles from "../styles/form.module.css";
function ForgottPass() {
  const handleSubmit = (event) => {
    event.preventDefault();

    let users = require("../../Data/person.json");

    const inputUserName = event.target.username.value;

    users.forEach((user) => {
      if (user.username === inputUserName) {
        console.log(user.password);

        // TODO SHOW THIS A LABEL WITH THE USERS PASSWORD
      } else {
        console.log("No user found");
        // TODO SHOW THIS AS A LABEL
      }
    });
  };

  return (
    <div className="main-container">
      <Hero header="Forgot password" />
      <form className={formstyles.formstyle}>
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
        </div>
      </form>
    </div>
  );
}

export default ForgottPass;
