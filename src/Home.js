import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img2.png";

function Home() {
  return (
    <section id="home">
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/#service"
        btname="Get started"
        content="Our commitment to excellence is reflected in the caliber of talent that fuels our organization. We transform your business challenges into opportunities, crafting bespoke solutions that align seamlessly with your objectives."
      />
    </section>
  );
}

export default Home;
