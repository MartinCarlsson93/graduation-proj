import React from "react";
import { useRouter } from "next/router";
import Hero from "./Components/hero/Hero";

function Login() {
  const router = useRouter();
  return (
    <div className="main-container">
      <Hero header="Login" />
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
            Login
          </button>
          <div className="button-container">
            <button
              className="content-button"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </button>
            <button
              className="content-button"
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
