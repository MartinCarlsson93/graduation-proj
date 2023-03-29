import React from "react";
import { useRouter } from "next/router";
import Hero from "./Components/hero/Hero";
import formstyles from "../styles/form.module.css";

function Login() {
  const router = useRouter();
  return (
    <div className="main-container">
      <Hero header="Login" />
      <form>
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
