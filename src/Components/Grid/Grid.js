import React from "react";
import "./Grid.css";
import { Link } from "react-router-dom";
import P from "../Styles/P.style";
import A2 from "../Styles/A2.style";
import imageSource1 from "../../assets/project-images/snips/g2h.png";
import imageSource2 from "../../assets/project-images/snips/humble.png";
import imageSource3 from "../../assets/project-images/snips/feline-fun.png";
import imageSource4 from "../../assets/project-images/snips/prepper.png";
import imageSource5 from "../../assets/project-images/snips/got.png";
import imageSource6 from "../../assets/project-images/snips/weather.png";
import imageSource7 from "../../assets/project-images/snips/heritage.png";
import imageSource8 from "../../assets/project-images/snips/cat-personality.png";
import imageSource9 from "../../assets/project-images/snips/javascript-calc.png";

import fullImageSource1 from "../../assets/project-images/full-pics/g2h.png";
import fullImageSource2 from "../../assets/project-images/full-pics/humble.png";
import fullImageSource3 from "../../assets/project-images/full-pics/feline-fun.png";
import fullImageSource4 from "../../assets/project-images/full-pics/prepper.png";
import fullImageSource5 from "../../assets/project-images/full-pics/got.png";
import fullImageSource6 from "../../assets/project-images/full-pics/weather.png";
import fullImageSource7 from "../../assets/project-images/full-pics/heritage.png";
import fullImageSource8 from "../../assets/project-images/full-pics/cat-personality.png";
import fullImageSource9 from "../../assets/project-images/snips/javascript-calc.png";

const Grid = () => {
  const projectArray = [
    {
      image: imageSource1,
      fullImage: fullImageSource1,
      name: "Gateway 2 Heritage",
      description:
        "A website that collates and displays content from various cultural heritage institutions",
      websiteUrl: "https://gateway2heritage.netlify.com",
      githubUrl: "https://github.com/fac18/t4b-g2h",
      stack:
        "React, React-Router-DOM, Styled Components, Airtable, Netlify Functions, Netlify",
    },
    {
      image: imageSource2,
      fullImage: fullImageSource2,
      name: "humble",
      description:
        "A website to develop the local community of the person using it by sharing skills to and from community members",
      websiteUrl: "https://wearehumble.herokuapp.com",
      githubUrl: "https://github.com/fac18/humble",
      stack: "React, Express, PostgreSQL, Google Maps, Heroku",
    },
    {
      image: imageSource3,
      fullImage: fullImageSource3,
      name: "Feline Pet Game",
      description:
        "A game about feeding or playing with your chosen cat, receiving content from the Cat API about all the different cat breeds in their database",
      websiteUrl: "https://feline-fun-mr-project.netlify.com",
      githubUrl: "https://github.com/ReginaldJbeili/feline-fun-mr-project",
      stack: "React, Netlify",
    },
    {
      image: imageSource7,
      fullImage: fullImageSource7,
      name: "UK heritage sites",
      description: "An autocompleter website to search for UK heritage sites",
      websiteUrl: "https://week4-gmno-autocomplete.herokuapp.com",
      githubUrl: "https://github.com/fac18/week4-gmno-autocomplete",
      stack: "HTML5, CSS3, Javascript, and Node.js",
    },
    {
      image: imageSource8,
      fullImage: fullImageSource8,
      name: "Cat Personality Test",
      description:
        "A website to match your personality to a cat breed that gets displayed as a GIF",
      websiteUrl: "https://fac18.github.io/week3-gmno-prrr-api/",
      githubUrl: "https://github.com/fac18/week3-gmno-prrr-api",
      stack: "HTML5, CSS3, and JavaScript",
    },
    {
      image: imageSource9,
      fullImage: fullImageSource9,
      name: "Javascript Calculator",
      description:
        "A calculator that you can use with button clicks or with typing on the keyboard",
      websiteUrl: "https://reginaldjbeili.github.io/mycalculator/",
      githubUrl: "https://github.com/ReginaldJbeili/mycalculator",
      stack: "HTML5, CSS3, and JavaScript",
    },
  ];
  return (
    <div className="grid-container">
      {projectArray.map((image) => (
        <div key={image.name} className="project-card">
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
      ))}
    </div>
  );
};

export default Grid;
