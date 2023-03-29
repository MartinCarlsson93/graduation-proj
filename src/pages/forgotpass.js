import React from "react";
import Hero from "./Components/hero/Hero";
import formstyles from "../styles/form.module.css";
function ForgottPass() {
  return (
    <div className="main-container">
      <Hero header="Forgot password" />
      <form>
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
