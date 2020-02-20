import React from "react";
import "./Contact.css";
import githubIcon from "../assets/icons/jam_github-square.svg";
import linkedInIcon from "../assets/icons/jam_linkedin-square.svg";
import twitterIcon from "../assets/icons/jam_twitter-square.svg";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="white-text">Contact Me</h2>
      <div className="contact-info">
        <h1 className="white-text">reginaldjbeili@gmail.com</h1>
        <div className="links-container">
          <a
            href="https://www.linkedin.com/in/ReginaldJbeili"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="github" src={linkedInIcon} />
          </a>
          <a
            href="https://www.github.com/ReginaldJbeili"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="github" src={githubIcon} />
          </a>
          <a
            href="https://www.twitter.com/ReginaldJbeili"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="github" src={twitterIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
