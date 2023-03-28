import React from "react";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  return (
    <div>
      <h1>Login</h1>
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
    </div>
  );
}

export default Login;
