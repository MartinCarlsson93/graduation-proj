import React from "react";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  return (
    <div>
      <h1>Login</h1>
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

          <label for="password">Password</label>
          <input
            className="password"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button type="submit">Login</button>
        </div>

        <ul>
          <li>
            <button onClick={() => router.push("/signup")}>Sign Up</button>
          </li>
          <li>
            <button onClick={() => router.push("/forgotpass")}>
              Forgot Password
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Login;
