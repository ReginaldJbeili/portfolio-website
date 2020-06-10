import React from "react";
import "./Projects.css";
import Grid from "../Grid/Grid";
import Slideshow from "../Slideshow/Slideshow";
import { Link, Route, Switch } from "react-router-dom";
import SingleProject from "../SingleProject/SingleProject";
import H3 from "../Styles/H3.style";
import Button from "../Styles/Button.style";
import H2 from "../Styles/H2.style";

const Projects = () => {
  const [toggleSlideshow, setToggleSlideshow] = React.useState(false);
  const [toggleGrid, setToggleGrid] = React.useState(true);

  return (
    <section id="projects" className="projects-section">
      <div className="project-button-container">
        <Button
          onClick={() => {
            setToggleSlideshow(false);
            setToggleGrid(true);
          }}
          className="project-button-grid"
        >
          Grid
        </Button>
        <Button
          onClick={() => {
            setToggleSlideshow(true);
            setToggleGrid(false);
          }}
          className="project-button-slideshow"
        >
          Slideshow
        </Button>
      </div>

      {toggleSlideshow ? <Route path="/" component={Slideshow} /> : null}
      {toggleGrid ? <Route path="/" component={Grid} /> : null}
    </section>
  );
};

export default Projects;
