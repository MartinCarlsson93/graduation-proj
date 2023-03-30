import React from "react";
import Hero from "./Components/hero/Hero";
import aboutStyles from "../styles/about.module.css";

function AboutUs() {
  return (
    <div className="main-container">
      <Hero header="About Us" />

      <div className={aboutStyles.flexContainer}>
        <div className={aboutStyles.imageContainer}>
          <img
            src="../../public/about.farmtotable.jpg"
            alt="Image 1"
            className={aboutStyles.image}
          />
          <div className={aboutStyles.paragraphContainer}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat, enim vel consequat interdum, velit odio malesuada
              nulla, vitae volutpat purus odio non sapien. Curabitur in
              ullamcorper neque. Nulla facilisi.
            </p>
          </div>
          <img
            src="/path/to/your/image2.jpg"
            alt="Image 2"
            className={aboutStyles.image}
          />
        </div>
        <div className={aboutStyles.paragraphContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat, enim vel consequat interdum, velit odio malesuada nulla,
            vitae volutpat purus odio non sapien. Curabitur in ullamcorper
            neque. Nulla facilisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
