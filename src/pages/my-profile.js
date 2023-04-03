import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Hero from "./Components/hero/Hero";
import formstyles from "../styles/form.module.css";

function MyProfile() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [person, setPerson] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch("../data/person.json")
      .then((response) => response.json())
      .then((data) => setPerson(data[0]));
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const renderProfile = (person) => {
    return (
      <div className={formstyles.profile}>
        <div className={formstyles.profileHeader}>
          <h2 className={formstyles.profileHeading}>{`${person.firstname} ${person.lastname}`}</h2>
          <button className={formstyles.logoutButton} onClick={handleLogout}>
            Logga ut
          </button>
        </div>
        <div className={formstyles.profileContent}>
          <div className={formstyles.roundProfileImage}>
            <Image
              src="/Assets/images/0.jpg"
              alt="Profile Image"
              width={200}
              height={200}
            />
          </div>
          <div className={formstyles.profileInfo}>
            <p>
              <strong>Användarnamn: </strong>
              {person.username}
            </p>
            <p>
              <strong>Email: </strong>
              {person.email}
            </p>
            <p>
              <strong>Födelsedag: </strong>
              {person.birthday}
            </p>
            <p>
              <strong>Förnamn: </strong>
              {person.firstname}
            </p>
            <p>
              <strong>Efternamn: </strong>
              {person.lastname}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderLoginButton = () => {
    return (
      <button
        className={formstyles.contentbutton}
        onClick={() => setLoggedIn(true)}
      >
        Logga in
      </button>
    );
  };

  return (
    <div className={formstyles.container}>
      <Hero header="Min profil" />
      {loggedIn ? (person && renderProfile(person)) : renderLoginButton()}
    </div>
  );
}

export default MyProfile;
