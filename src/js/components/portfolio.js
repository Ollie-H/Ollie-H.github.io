import React from "react";

import About from "./about";
import Work from "./work";
import Experience from "./experience";
import Education from "./education";

const Portfolio = props => (
  <div>
    <About {...props} />
    <Experience {...props} />
    <Work {...props} />
    <Education {...props} />
  </div>
);

export default Portfolio;
