import React from "react";
import Hero from "../components/hero/Hero";
import aboutStyles from "../styles/about.module.css";

function AboutUs() {
  return (
    <div className="main-container">
      <Hero header="About Grocify" />

      <div className={aboutStyles.flexContainer}>
        <div className={aboutStyles.paragraphContainer}>
          <p>
            We are dedicated to providing our customers with the highest
            quality, sustainable, organic, and farm-to-table products. Our
            mission is to support local farmers and communities while offering
            our customers a healthier, environmentally-conscious choice for
            their everyday grocery needs.
          </p>
        </div>

        <div className={aboutStyles.imageContainer}>
          <img
            src="./organic.produce.jpg"
            alt="Organic vegetables"
            className={aboutStyles.image}
          />
        </div>
        <div className={aboutStyles.column}></div>
        <div className={aboutStyles.paragraphContainer}>
          <h2>Ethically produced and sustainability in mind</h2>
          <p>
            In addition to offering a diverse range of organic and sustainable
            products, we also prioritize reducing waste and minimizing our
            environmental footprint. From our commitment to using eco-friendly
            packaging and supporting zero-waste initiatives to our efforts to
            reduce energy consumption within our store, we continuously strive
            to make a positive impact on our planet.
          </p>
          <p>
            <h2>We are a community!</h2> of passionate individuals working
            together to create a healthier, more sustainable future for all.
            Thank you for choosing to shop with us and for supporting our
            mission to make a difference, one meal at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
