import React from "react";
function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <div className="container">
          <label for="username">Username</label>
          <input
            className="userName"
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />
          <label for="firstname">Firstname</label>
          <input
            className="userName"
            type="text"
            placeholder="Enter Firstname"
            name="firstname"
            required
          />
          <label for="lastname">Lastname</label>
          <input
            className="userName"
            type="text"
            placeholder="Enter Lastname"
            name="lastname"
            required
          />
          <label for="email">Email</label>
          <input
            className="userName"
            type="email"
            placeholder="Enter Email"
            name="email"
            required
          />
          <label for="birthdate">Birthday</label>
          <input
            className="userName"
            type="date"
            placeholder="Enter Birthday"
            name="birthdate"
            required
          />
          <label for="password">Password</label>
          <input
            className="password"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button type="submit">Create account</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;