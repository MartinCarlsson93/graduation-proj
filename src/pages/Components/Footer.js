import React from "react";

function Footer() {
  return (
    <div className="footerContent">
      <ul className="nav-footer">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/campains">Campains </a>
        </li>
        <li>
          <a href="/contact">Contact </a>
        </li>
      </ul>
      <div className="copyright">
        Copryright © 2023 BRIX Templates | All Rights Reserved
      </div>
      <div className="gitHubLink">
        <a
          target="_blank"
          href="https://github.com/MartinCarlsson93/graduation-proj"
        >
          https://github.com/MartinCarlsson93/graduation-proj
        </a>
      </div>
    </div>
  );
}

export default Footer;
