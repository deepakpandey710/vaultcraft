import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img3.png";

function About() {
  return (
    <section id="about">
      <Common
        name="Welcome to the world of"
        imgsrc={web}
        visit="/#contact"
        btname="Contact Us"
        content="At VaultCraft Innovations, we take immense pride in the strength of our team. We understand that true innovation and exceptional results emerge when individuals come together with a shared purpose. We believe in the power of teamwork to transform ordinary efforts into extraordinary achievements.
      "
      />
    </section>
  );
}

export default About;
