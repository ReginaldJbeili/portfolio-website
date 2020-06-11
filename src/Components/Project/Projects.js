import React from "react";
import "./Projects.css";
import Grid from "../Grid/Grid";
// import Slideshow from "../Slideshow/Slideshow";
import H1 from "../Styles/H1.style";
import { Route } from "react-router-dom";

// import Button from "../Styles/Button.style";

const Projects = () => {
  // const [toggleSlideshow, setToggleSlideshow] = React.useState(false);
  // setToggleGrid
  const toggleGrid = React.useState(true);

  return (
    <section id="projects" className="projects-section">
      <div className="project-button-container">
        <H1>PROJECTS</H1>
      </div>

      {/* {toggleSlideshow ? <Route path="/" component={Slideshow} /> : null} */}
      {toggleGrid ? <Route path="/" component={Grid} /> : null}
    </section>
  );
};

export default Projects;
