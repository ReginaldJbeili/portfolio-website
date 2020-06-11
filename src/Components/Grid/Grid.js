import React from "react";
import "./Grid.css";

import P from "../Styles/P.style";
import A2 from "../Styles/A2.style";
import imageSource1 from "../../assets/project-images/snips/g2h.png";
import imageSource2 from "../../assets/project-images/snips/humble.png";
import imageSource3 from "../../assets/project-images/snips/feline-fun.png";

import imageSource7 from "../../assets/project-images/snips/heritage.png";
import imageSource8 from "../../assets/project-images/snips/cat-personality.png";
import imageSource9 from "../../assets/project-images/snips/javascript-calc.png";

import fullImageSource1 from "../../assets/project-images/full-pics/g2h.png";
import fullImageSource2 from "../../assets/project-images/full-pics/humble.png";
import fullImageSource3 from "../../assets/project-images/full-pics/feline-fun.png";

import fullImageSource7 from "../../assets/project-images/full-pics/heritage.png";
import fullImageSource8 from "../../assets/project-images/full-pics/cat-personality.png";
import fullImageSource9 from "../../assets/project-images/snips/javascript-calc.png";

const Grid = () => {
  const projectArray = [
    {
      image: imageSource1,
      fullImage: fullImageSource1,
      name: "GATEWAY 2 HERITAGE",
      description:
        "Web app MVP for museums/archives to sell licensing of cultural images for use",
      websiteUrl: "https://gateway2heritage.netlify.com",
      githubUrl: "https://github.com/fac18/t4b-g2h",
      stack:
        "React.JS, React-Router-DOM, Airtable, Material UI, Netlify Functions, Netlify",
    },
    {
      image: imageSource2,
      fullImage: fullImageSource2,
      name: "HUMBLE",
      description:
        "Web app to learn and teach skills within your local community utilising Google Maps",
      websiteUrl: "https://wearehumble.herokuapp.com",
      githubUrl: "https://github.com/fac18/humble",
      stack: "React.JS, Node.JS, Express.JS, PostgreSQL, Google Maps, Heroku",
    },
    {
      image: imageSource3,
      fullImage: fullImageSource3,
      name: "FELINE FUN",
      description:
        "Game about feeding/playing with your chosen cat, receiving the different cat breeds from the Cat API",
      websiteUrl: "https://feline-fun-mr-project.netlify.com",
      githubUrl: "https://github.com/ReginaldJbeili/feline-fun-mr-project",
      stack: "React.JS, Netlify",
    },
    {
      image: imageSource7,
      fullImage: fullImageSource7,
      name: "UK HERITAGE SITES",
      description:
        "Autocompleter website to search for UK heritage sites that links to their Wikipedia pages",
      websiteUrl: "https://week4-gmno-autocomplete.herokuapp.com",
      githubUrl: "https://github.com/fac18/week4-gmno-autocomplete",
      stack: "HTML5, CSS3, JavaScript, and Node.JS",
    },
    {
      image: imageSource8,
      fullImage: fullImageSource8,
      name: "CAT PERSONALITY TEST",
      description:
        "Web app to match your personality to a cat breed from the Cat API that gets displayed as a GIF",
      websiteUrl: "https://fac18.github.io/week3-gmno-prrr-api/",
      githubUrl: "https://github.com/fac18/week3-gmno-prrr-api",
      stack: "HTML5, CSS3, and JavaScript",
    },
    {
      image: imageSource9,
      fullImage: fullImageSource9,
      name: "JAVASCRIPT CALCULATOR",
      description:
        "Calculator that you can use with button clicks or with typing on the keyboard",
      websiteUrl: "https://reginaldjbeili.github.io/mycalculator/",
      githubUrl: "https://github.com/ReginaldJbeili/mycalculator",
      stack: "HTML5, CSS3, and JavaScript",
    },
  ];
  return (
    <div className="grid-container">
      {projectArray.map((image) => (
        <div key={image.name} className="project-card">
          <div className="main-info-row">
            <div className="image-column">
              <img src={image.image} alt={image.name} />
              <div className="links-row">
                <A2
                  className="white-text"
                  href={image.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </A2>
                <A2
                  className="white-text"
                  href={image.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </A2>
              </div>
            </div>
            <div className="text-column">
              <P>{image.name}</P>
              <P>{image.description}</P>
            </div>
          </div>
          <div className="stack">
            <P>Tech Stack: {image.stack}</P>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
