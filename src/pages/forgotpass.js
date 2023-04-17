import React, { useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
import formstyles from "../styles/form.module.css";

function ForgottPass({ person }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputUserName = event.target.username.value;

    let user = person.find((user) => user.username === inputUserName);

    for (let i = 0; i < person.length; i++) {
      if (person[i].username === inputUserName) {
        setAnswer(user.password);
        break;
      } else {
        setAnswer("No user found");
      }
    }
  };

  useEffect(() => {
    if (answer) {
      console.log(answer);
    }
  }, [answer]);

  return (
    <div className="main-container">
      <Hero header="Forgot password" />
      <form className={formstyles.formstyle} onSubmit={handleSubmit}>
        <div className={formstyles.formcontainer}>
          <p>
            The password will be sent to the email associated with the userName
          </p>
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

          <button className={formstyles.contentbutton} type="submit">
            Send password
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

export default ForgottPass;
