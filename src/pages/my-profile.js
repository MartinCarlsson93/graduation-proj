import React from "react";
import { useRouter } from "next/router";
import Hero from "./Components/hero/Hero";
import formstyles from "../styles/form.module.css";
import { useState, useEffect, useCallback } from "react";
function MyProfile() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  return (
    // TODO SET A HANDLER THAT COMES HERE IF LOGGED IN, OTHERWISE GO TO LOGIN PAGE
    <div className="main-container">
      <Hero header="My profile" />
      <button
        className={formstyles.contentbutton}
        onClick={() => router.push("/login")}
      >
        Login
      </button>
    </div>
  );
}

export default MyProfile;
