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
  const [toggleSlideshow, setToggleSlideshow] = React.useState(true);
  const [toggleGrid, setToggleGrid] = React.useState(false);
  const [toggleHeight, setToggleHeight] = React.useState(false);

  return (
    <section
      id="projects"
      className={
        toggleHeight ? "projects-grid-section" : "projects-slideshow-section"
      }
    >
      <H2>Projects</H2>
      <H3>Click on each to find out more</H3>

      <div className="project-button-container">
        <Link to="/">
          <Button
            onClick={() => {
              setToggleSlideshow(true);
              setToggleGrid(false);
              setToggleHeight(false);
            }}
          >
            Slideshow
          </Button>
        </Link>

        <Link to="/">
          <Button
            onClick={() => {
              setToggleSlideshow(false);
              setToggleGrid(true);
              setToggleHeight(true);
            }}
          >
            Grid
          </Button>
        </Link>
      </div>
      <Switch>
        <Route path="/singleproject" component={SingleProject} />
        {toggleSlideshow ? <Route path="/" component={Slideshow} /> : null}
        {toggleGrid ? <Route path="/" component={Grid} /> : null}
      </Switch>
    </section>
  );
};

export default Projects;
