import React from "react";
import Hero from "./Components/hero/Hero";
import aboutStyles from "../styles/about.module.css";

function AboutUs() {
  return (
    <div className="main-container">
      <Hero header="About Us" />

      <div className={aboutStyles.flexContainer}>
        <div className={aboutStyles.paragraphContainer}>
          <p>
            <h2>At Grocify,</h2> we are dedicated to providing our customers
            with the highest quality, sustainable, organic, and farm-to-table
            products. Our mission is to support local farmers and communities
            while offering our customers a healthier, environmentally-conscious
            choice for their everyday grocery needs. We believe in the power of
            sustainable agriculture and its potential to transform our food
            system.
            <h2>That's why we work tirelessly</h2> to source only the finest
            organic produce from local farmers who share our commitment to
            environmental stewardship and ethical farming practices. By
            partnering with these local farmers, we are able to offer our
            customers fresh, nutrient-dense, and delicious produce while
            reducing the environmental impact of long-distance transportation.
            <h2>Our commitment</h2> to quality extends beyond just our produce.
            We carefully curate a wide selection of organic meats, dairy, and
            pantry staples to ensure that our customers have access to the best
            products for their health and well-being. Our knowledgeable staff is
            always on hand to help answer any questions or provide guidance on
            the benefits of choosing organic, sustainable products.
          </p>
        </div>
        <div className={aboutStyles.imageContainer}>
          <img
            src="/about.farmtotable.jpg"
            alt="Image 1"
            className={aboutStyles.image}
          />
        </div>
      </div>

      <div className={aboutStyles.flexContainer}>
        <div className={aboutStyles.imageContainer}></div>
      </div>

      <div className={aboutStyles.flexContainer}>
        <div className={aboutStyles.imageContainer}>
          <img
            src="/about.together.avif"
            src="/about.together.avif"
            alt="Image 2"
            className={aboutStyles.image}
          />
        </div>
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
            In addition to offering a diverse range of organic and sustainable
            products, we also prioritize reducing waste and minimizing our
            environmental footprint. From our commitment to using eco-friendly
            packaging and supporting zero-waste initiatives to our efforts to
            reduce energy consumption within our store, we continuously strive
            to make a positive impact on our planet.
            <h3>At Grocify,</h3> we are more than just a grocery store - we are
            a community of passionate individuals working together to create a
            healthier, more sustainable future for all. Thank you for choosing
            to shop with us and for supporting our mission to make a difference,
            one meal at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
