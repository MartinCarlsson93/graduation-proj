import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Hero from "../components/hero/Hero";
import formstyles from "../styles/form.module.css";

function Login({ loggedIn, logIn, logOut, person }) {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [answer, setAnswer] = useState("");

  const fetchData = () => {
    setUsers(person);
  };

  useEffect(fetchData, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputUserName = event.target.username.value;
    const inputPassword = event.target.password.value;

    for (let i = 0; i < users.length; i++) {
      if (users[i].username === inputUserName) {
        if (users[i].password === inputPassword) {
          setAnswer("Succesfully logged in");
          logIn();
          router.push("/my-profile");
        } else {
          setAnswer("Wrong password to the connected userName");
          logOut();
        }
        break;
      } else {
        setAnswer("No user found with thoose credentials");
        logOut();
      }
    }

    console.log(loggedIn);
  };
  return (
    <div className="main-container">
      <Hero header="Login" />
      <form className={formstyles.formstyle} onSubmit={handleSubmit}>
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

          <div style={{ marginTop: "16px" }}>
            <p style={{ fontSize: "18px", paddingLeft: "8px" }}>{answer}</p>
          </div>

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

export async function getServerSideProps() {
  let res = await fetch("http://localhost:3000/api/persons", {
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

export default Login;
