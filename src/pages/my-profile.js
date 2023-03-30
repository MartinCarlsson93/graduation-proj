import React from "react";
import { useRouter } from "next/router";
import Hero from "./Components/hero/Hero";
import formstyles from "../styles/form.module.css";
import { useState, useEffect, useCallback } from "react";
function MyProfile() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  return (
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
