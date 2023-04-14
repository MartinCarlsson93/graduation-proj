import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Hero from "../components/hero/Hero";
import profilestyles from "../styles/profile.module.css";

function MyProfile({ loggedIn, logOut, person }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (loggedIn === false) {
      router.push("/login");
    }
  }),
    [loggedIn];

  const fetchData = () => {
    setUser(person[0]);
  };

  useEffect(fetchData, []);

  const handleLogout = () => {
    logOut();
  };

  console.log(person[0]);

  const renderProfile = (_person) => {
    return (
      <div className={profilestyles.profile}>
        <div className={profilestyles.profileHeader}>
          <h2
            className={profilestyles.profileHeading}
          >{`${_person.firstname} ${_person.lastname}`}</h2>
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
              <strong>Username:</strong> {_person.username}
            </p>
            <p>
              <strong>Email:</strong> {_person.email}
            </p>
            <p>
              <strong>Birthday:</strong> {_person.birthday}
            </p>
            <p>
              <strong>Firstname:</strong> {_person.firstname}
            </p>
            <p>
              <strong>Lastname:</strong> {_person.lastname}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={profilestyles.container}>
      <Hero header="My Profile" />
      {loggedIn && user ? renderProfile(user) : "redirecting..."}
    </div>
  );
}

export async function getServerSideProps() {
  let res = await fetch(`${process.env.ROOT_URL}/api/persons`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let person = await res.json();

  return {
    props: { person },
  };
}

export default MyProfile;
