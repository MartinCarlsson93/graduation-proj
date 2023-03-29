import React from "react";
import Hero from "./Components/hero/Hero";
function SignUp() {
  return (
    <div className="main-container">
      <Hero header="Sign up" />
      <form>
        <div className="form-container">
          <label className="form-label" for="username">
            Username
          </label>
          <input
            className="userName"
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />
          <label className="form-label" for="firstname">
            Firstname
          </label>
          <input
            className="userName"
            type="text"
            placeholder="Enter Firstname"
            name="firstname"
            required
          />
          <label className="form-label" for="lastname">
            Lastname
          </label>
          <input
            className="userName"
            type="text"
            placeholder="Enter Lastname"
            name="lastname"
            required
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
          <label className="form-label" for="birthdate">
            Birthday
          </label>
          <input
            className="userName"
            type="date"
            placeholder="Enter Birthday"
            name="birthdate"
            required
          />
          <label className="form-label" for="password">
            Password
          </label>
          <input
            className="password"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button className="content-button" type="submit">
            Create account
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
