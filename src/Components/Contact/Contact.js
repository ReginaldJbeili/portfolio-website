import React from "react";
import "./Contact.css";
import githubIcon from "../../assets/icons/jam_github-square.svg";
import linkedInIcon from "../../assets/icons/jam_linkedin-square.svg";
import twitterIcon from "../../assets/icons/jam_twitter-square.svg";
import H1 from "../Styles/H1.style";
import H2 from "../Styles/H2.style";
import P from "../Styles/P.style";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <H2 className="white-text">Contact</H2>
      <div className="contact-info">
        <H1 className="white-text">reginaldjbeili@gmail.com</H1>
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
      <P className="credits">
        Credits to my Family, Friends, Founders and Coders, Space4, Vohn - for
        the pictures, and Irene - for being you
      </P>
    </section>
  );
};

export default Contact;
