import React, { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import formstyles from "../styles/form.module.css";

function SignUp({ person }) {
  let baseUrl = "https://graduation-proj.vercel.app";
  const [answer, setAnswer] = useState("");
  const [persons, setPersons] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      id: person.length ? Math.max(...person.map((x) => x.id)) + 1 : 1,
      username: event.target.username.value,
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      birthday: event.target.birthdate.value,
      password: event.target.password.value,
    };

    console.log(process.env.API_URL);

    if (process.env.API_URL) {
      let res = await fetch(`${process.env.API_URL}/api/persons`, {
        mode: "no-cors",
        method: "POST",
        body: {
          data: data,
        },
      })
        .then((res) => res.json())
        .then((_data) => {
          setPersons([...persons, _data]);
        });
      setPersons([...persons, res]);

      setAnswer(`Succesfully saved user for ${event.target.username.value}`);
    } else {
      let res = await fetch(`${baseUrl}/api/persons`, {
        mode: "no-cors",
        method: "POST",
        body: {
          data: data,
        },
      })
        .then((res) => res.json())
        .then((_data) => {
          setPersons([...persons, _data]);
        });
      setPersons([...persons, res]);

      setAnswer(`Succesfully saved user for ${event.target.username.value}`);
    }
  };

  useEffect(() => {
    setPersons(person);
  }, [person]);

  return (
    <div className="main-container">
      <Hero header="Sign up" />
      <form className={formstyles.formstyle} onSubmit={handleSubmit}>
        <div className={formstyles.formcontainer}>
          <label className={formstyles.formlabel} htmlFor="username">
            Username
          </label>
          <input
            className={formstyles.forminput}
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />
          <label className={formstyles.formlabel} htmlFor="firstname">
            Firstname
          </label>
          <input
            className={formstyles.forminput}
            type="text"
            placeholder="Enter Firstname"
            name="firstname"
            required
          />
          <label className={formstyles.formlabel} htmlFor="lastname">
            Lastname
          </label>
          <input
            className={formstyles.forminput}
            type="text"
            placeholder="Enter Lastname"
            name="lastname"
            required
          />
          <label className={formstyles.formlabel} htmlFor="email">
            Email
          </label>
          <input
            className={formstyles.forminput}
            type="email"
            placeholder="Enter Email"
            name="email"
            required
          />
          <label className={formstyles.formlabel} htmlFor="birthdate">
            Birthday
          </label>
          <input
            className={formstyles.forminput}
            type="date"
            placeholder="Enter Birthday"
            name="birthdate"
            required
          />
          <label className={formstyles.formlabel} htmlFor="password">
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
            Create account
          </button>

          <div style={{ marginTop: "16px" }}>
            <p style={{ fontSize: "18px", paddingLeft: "8px" }}>{answer}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps() {
  let res = await fetch(`${process.env.API_URL}/api/persons`, {
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

export default SignUp;
