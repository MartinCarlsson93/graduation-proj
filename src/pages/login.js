import React, { useState } from "react";
import { useRouter } from "next/router";
import Hero from "./Components/hero/Hero";
import formstyles from "../styles/form.module.css";

function Login() {
  const router = useRouter();
  const [login, setLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputUserName = event.target.username.value;
    const inputPassword = event.target.password.value;

    let users = require("../../Data/person.json");

    users.forEach((user) => {
      if (user.username === inputUserName) {
        console.log("YEEES!");
        if (user.password === inputPassword) {
          console.log("Correct password aswell");
          setLogin(!login);
          //TODO CREATE A HANDLER SO THAT WHEN LOGGED IN NEVER GO HERE GO TO PROFILE INSTEAD
        } else {
          console.log("Wrong Password");
          //TODO SHOW THIS AS A LABEL
        }
      } else {
        console.log("NOOO");
        // TODO SHOW THIS AS A LABEL
      }
    });

    console.log(login);
  };
  return (
    <div className="main-container">
      <Hero header="Login" />
      <form onSubmit={handleSubmit}>
        <div className={formstyles.formcontainer}>
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

          <label className={formstyles.formlabel} for="password">
            Password
          </label>
          <input
            className={formstyles.forminput}
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button className={formstyles.contentbutton} type="submit">
            Login
          </button>
          <div className={formstyles.buttoncontainer}>
            <button
              className={formstyles.contentbutton}
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </button>
            <button
              className={formstyles.contentbutton}
              onClick={() => router.push("/forgotpass")}
            >
              Forgot Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
