import React from "react";
import "./SingleProject.css";
import { Redirect } from "react-router-dom";
import P from "../Styles/P.style";
import A from "../Styles/A.style";

const SingleProject = ({ location }) => {
  console.log("this is slideshowProps", location.slideshowProps);
  const singleProjectInfo = location.slideshowProps;
  if (!singleProjectInfo) return <Redirect to="/" />;
  return (
    <div className="singleproject-section">
      <img src={singleProjectInfo.fullImage} alt={singleProjectInfo.name} />
      <div className="anchors">
        <A
          className="white-text"
          href={singleProjectInfo.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          website
        </A>
        <A
          className="white-text"
          href={singleProjectInfo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </A>
      </div>
      <P className="white-text">Name: {singleProjectInfo.name}</P>
      <P className="white-text">Description: {singleProjectInfo.description}</P>
      <P className="white-text">Stack: {singleProjectInfo.stack}</P>
    </div>
  );
};

export default SingleProject;
