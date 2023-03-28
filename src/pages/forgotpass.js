import React from "react";
import Hero from "./Components/hero/Hero";
function ForgottPass() {
  return (
    <div>
      <Hero header="Forgot password" />
      <form>
        <div className="container">
          <p>
            The password will be sent to the email associated with the userName
          </p>
          <label for="username">Username</label>
          <input
            className="userName"
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />

          <button type="submit">Send password</button>
        </div>
      </form>
    </div>
  );
}

export default ForgottPass;
