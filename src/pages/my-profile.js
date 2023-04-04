import React from "react";
import { useRouter } from "next/router";
import Hero from "./Components/hero/Hero";
import formstyles from "../styles/form.module.css";
import { useState, useEffect, useCallback } from "react";
function MyProfile({ loggedIn, logIn }) {
  const router = useRouter();

  console.log(loggedIn);

  let users = require("../../public/Data/person.json");

  useEffect(() => {
    if (loggedIn === false) {
      router.push("/login");
    }
  }),
    [loggedIn];

  return (
    <div className="main-container">
      <Hero header="My profile" />
      <p>rederecting...</p>
      <p>Du är inloggad nu</p>
    </div>
  );
}

export default MyProfile;
