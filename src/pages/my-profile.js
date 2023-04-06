import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Hero from "./Components/hero/Hero";
import profilestyles from "../styles/profile.module.css";

function MyProfile({ loggedIn, logOut }) {
  const [person, setPerson] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (loggedIn === false) {
      router.push("/login");
    }
  }),
    [loggedIn];

  useEffect(() => {
    fetch("/Data/person.json")
      .then((response) => response.json())
      .then((data) => setPerson(data[0]));
  }, []);

  const handleLogout = () => {
    logOut();
  };

  const renderProfile = (person) => {
    return (
      <div className={profilestyles.profile}>
        <div className={profilestyles.profileHeader}>
          <h2
            className={profilestyles.profileHeading}
          >{`${person.firstname} ${person.lastname}`}</h2>
          <button className={profilestyles.logoutButton} onClick={handleLogout}>
            Log out
          </button>
        </div>
        <div className={profilestyles.profileContent}>
          <div className={profilestyles.roundProfileImage}>
            <Image
              src="/Assets/images/0.jpg"
              alt="Profile Image"
              width={200}
              height={200}
            />
          </div>
          <div className={profilestyles.profileInfo}>
            <p>
              <strong>Username:</strong> {person.username}
            </p>
            <p>
              <strong>Email:</strong> {person.email}
            </p>
            <p>
              <strong>Birthday:</strong> {person.birthday}
            </p>
            <p>
              <strong>Firstname:</strong> {person.firstname}
            </p>
            <p>
              <strong>Lastname:</strong> {person.lastname}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={profilestyles.container}>
      <Hero header="My Profile" />
      {loggedIn && person ? renderProfile(person) : "redirecting..."}
    </div>
  );
}

export default MyProfile;
