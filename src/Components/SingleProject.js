import React from "react";
import "./SingleProject.css";
import { Redirect } from "react-router-dom";

const SingleProject = ({ location }) => {
  const singleProjectInfo = location.slideshowProps;
  console.log(location.slideshowProps);
  if (!singleProjectInfo) return <Redirect to="/" />;
  return (
    <>
      <img src={singleProjectInfo.fullImage} alt={singleProjectInfo.name} />
      <p className="white-text">Name: {singleProjectInfo.name}</p>
      <p className="white-text">Description: {singleProjectInfo.description}</p>
      <a className="white-text" href={singleProjectInfo.websiteUrl}>
        website
      </a>
      <a className="white-text" href={singleProjectInfo.githubUrl}>
        github
      </a>
      <p className="white-text">Stack: {singleProjectInfo.stack}</p>
    </>
  );
};

export default SingleProject;
