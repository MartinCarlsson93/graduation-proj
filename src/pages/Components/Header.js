import React from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <div className="header">
      <div>
        <h1>Go back</h1>
        <p>
          <button onClick={() => router.push("/")}>Home</button>
        </p>
      </div>
      <div>
        <h1>Contact us</h1>
        <p>
          <button onClick={() => router.push("/contact")}>Contact</button>
        </p>
      </div>
      <div>
        <h1>Campains</h1>
        <p>
          <button onClick={() => router.push("/campains")}>Campains</button>
        </p>
      </div>
    </div>
  );
}

export default Header;
