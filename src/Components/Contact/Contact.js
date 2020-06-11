import React from "react";
import "./Contact.css";
import githubIcon from "../../assets/icons/jam_github-square.svg";
import linkedInIcon from "../../assets/icons/jam_linkedin-square.svg";
import twitterIcon from "../../assets/icons/jam_twitter-square.svg";
import A2 from "../Styles/A2.style";

import H2 from "../Styles/H2.style";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-info">
        <H2 className="mobile-number">+44(0)7477364540</H2>
        <A2 href="mailto: reginaldjbeili@gmail.com">
          reginaldjbeili@gmail.com
        </A2>
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
