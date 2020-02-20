import React from "react";
import "./Projects.css";
import Grid from "./Grid";
import Slideshow from "./Slideshow";
import { Link, Route, Switch } from "react-router-dom";
import SingleProject from "./SingleProject";

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
      <h2>Projects</h2>
      <p>Click on each to find out more</p>

      <div className="project-button-container">
        <Link to="/">
          <button
            className="button-style"
            onClick={() => {
              setToggleSlideshow(true);
              setToggleGrid(false);
              setToggleHeight(false);
            }}
          >
            Slideshow
          </button>
        </Link>

        <Link to="/">
          <button
            className="button-style"
            onClick={() => {
              setToggleSlideshow(false);
              setToggleGrid(true);
              setToggleHeight(true);
            }}
          >
            Grid
          </button>
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
