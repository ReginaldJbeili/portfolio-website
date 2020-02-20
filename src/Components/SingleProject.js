import React from "react";
import "./SingleProject.css";
import { Redirect } from "react-router-dom";

const SingleProject = ({ location }) => {
  console.log("this is slideshowProps", location.slideshowProps);
  const singleProjectInfo = location.slideshowProps;
  if (!singleProjectInfo) return <Redirect to="/" />;
  return (
    <div className="singleproject-section">
      <img src={singleProjectInfo.fullImage} alt={singleProjectInfo.name} />
      <div className="anchors">
        <a
          className="white-text"
          href={singleProjectInfo.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          website
        </a>
        <a
          className="white-text"
          href={singleProjectInfo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </div>
      <p className="white-text">Name: {singleProjectInfo.name}</p>
      <p className="white-text">Description: {singleProjectInfo.description}</p>
      <p className="white-text">Stack: {singleProjectInfo.stack}</p>
    </div>
  );
};

export default SingleProject;
