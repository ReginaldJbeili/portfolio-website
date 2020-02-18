import React from "react";
import "./Grid.css";
import imageSource1 from "../assets/project-images/snips/humble.png";
import imageSource2 from "../assets/project-images/snips/g2h.png";
import imageSource3 from "../assets/project-images/snips/feline-fun.png";
import imageSource4 from "../assets/project-images/snips/prepper.png";
import imageSource5 from "../assets/project-images/snips/got.png";
import imageSource6 from "../assets/project-images/snips/weather.png";
import imageSource7 from "../assets/project-images/snips/heritage.png";
import imageSource8 from "../assets/project-images/snips/cat-personality.png";
const Grid = () => {
  const imageArray = [
    {
      image: imageSource1,
      fullImage: "",
      name: "Gateway 2 Heritage",
      description: "",
      websiteUrl: "https://gateway2heritage.netlify.com",
      githubUrl: "https://github.com/fac18/t4b-g2h",
      Stack: ""
    },
    {
      image: imageSource2,
      fullImage: "",
      name: "humble",
      description: "",
      websiteUrl: "http://wearehumble.herokuapp.com",
      githubUrl: "https://github.com/fac18/humble",
      Stack: ""
    },
    {
      image: imageSource3,
      fullImage: "",
      name: "Feline Pet Game",
      description: "",
      websiteUrl: "https://feline-fun-mr-project.netlify.com",
      githubUrl: "https://github.com/ReginaldJbeili/feline-fun-mr-project",
      Stack: ""
    },
    {
      image: imageSource4,
      fullImage: "",
      name: "Prepper",
      description: "",
      websiteUrl: "https://jamarad.herokuapp.com",
      githubUrl: "https://github.com/ReginaldJbeili/week8-denk",
      Stack: ""
    },
    {
      image: imageSource5,
      fullImage: "",
      name: "Game of Thrones Clan Builder",
      description: "",
      websiteUrl: "",
      githubUrl:
        "https://github.com/ReginaldJbeili/week6-week7-FHIN-got-db-auth",
      Stack: ""
    },
    {
      image: imageSource6,
      fullImage: "",
      name: "Weather",
      description: "",
      websiteUrl: "https://bcln-weather-app.herokuapp.com",
      githubUrl: "https://github.com/ReginaldJbeili/week5-bcln-backend-api",
      Stack: ""
    },
    {
      image: imageSource7,
      fullImage: "",
      name: "UK heritage sites",
      description: "",
      websiteUrl: "https://week4-gmno-autocomplete.herokuapp.com",
      githubUrl: "https://github.com/fac18/week4-gmno-autocomplete",
      Stack: ""
    },
    {
      image: imageSource8,
      fullImage: "",
      name: "Cat Personality Test",
      description: "",
      websiteUrl: "https://fac18.github.io/week3-gmno-prrr-api/",
      githubUrl: "https://github.com/fac18/week3-gmno-prrr-api",
      Stack: ""
    }
  ];
  return (
    <div className="grid-container">
      {imageArray.map(image => (
        <div>
          <img src={image.image} alt={image.name} />
          <p className="white-text">{image.name}</p>
        </div>
      ))}

      <h1>grid test</h1>
    </div>
  );
};

export default Grid;
