import React from "react";
import "./Slideshow.css";
import imageSource1 from "../assets/project-images/snips/humble.png";
import imageSource2 from "../assets/project-images/snips/g2h.png";
import imageSource3 from "../assets/project-images/snips/feline-fun.png";
import imageSource4 from "../assets/project-images/snips/prepper.png";
import imageSource5 from "../assets/project-images/snips/got.png";
import imageSource6 from "../assets/project-images/snips/weather.png";
import imageSource7 from "../assets/project-images/snips/heritage.png";
import imageSource8 from "../assets/project-images/snips/cat-personality.png";

import fullImageSource1 from "../assets/project-images/full-pics/humble.png";
import fullImageSource2 from "../assets/project-images/full-pics/g2h.png";
import fullImageSource3 from "../assets/project-images/full-pics/feline-fun.png";
import fullImageSource4 from "../assets/project-images/full-pics/prepper.png";
import fullImageSource5 from "../assets/project-images/full-pics/got.png";
import fullImageSource6 from "../assets/project-images/full-pics/weather.png";
import fullImageSource7 from "../assets/project-images/full-pics/heritage.png";
import fullImageSource8 from "../assets/project-images/full-pics/cat-personality.png";
import { Link } from "react-router-dom";
const Slideshow = () => {
  const imageArray = [
    {
      image: imageSource1,
      fullImage: fullImageSource1,
      name: "Gateway 2 Heritage",
      description: "",
      websiteUrl: "https://gateway2heritage.netlify.com",
      githubUrl: "https://github.com/fac18/t4b-g2h",
      stack: ""
    },
    {
      image: imageSource2,
      fullImage: fullImageSource2,
      name: "humble",
      description: "",
      websiteUrl: "http://wearehumble.herokuapp.com",
      githubUrl: "https://github.com/fac18/humble",
      stack: ""
    },
    {
      image: imageSource3,
      fullImage: fullImageSource3,
      name: "Feline Pet Game",
      description: "",
      websiteUrl: "https://feline-fun-mr-project.netlify.com",
      githubUrl: "https://github.com/ReginaldJbeili/feline-fun-mr-project",
      stack: ""
    },
    {
      image: imageSource4,
      fullImage: fullImageSource4,
      name: "Prepper",
      description: "",
      websiteUrl: "https://jamarad.herokuapp.com",
      githubUrl: "https://github.com/ReginaldJbeili/week8-denk",
      stack: ""
    },
    {
      image: imageSource5,
      fullImage: fullImageSource5,
      name: "Game of Thrones Clan Builder",
      description: "",
      websiteUrl: "",
      githubUrl:
        "https://github.com/ReginaldJbeili/week6-week7-FHIN-got-db-auth",
      stack: ""
    },
    {
      image: imageSource6,
      fullImage: fullImageSource6,
      name: "Weather",
      description: "",
      websiteUrl: "https://bcln-weather-app.herokuapp.com",
      githubUrl: "https://github.com/ReginaldJbeili/week5-bcln-backend-api",
      stack: ""
    },
    {
      image: imageSource7,
      fullImage: fullImageSource7,
      name: "UK heritage sites",
      description: "",
      websiteUrl: "https://week4-gmno-autocomplete.herokuapp.com",
      githubUrl: "https://github.com/fac18/week4-gmno-autocomplete",
      stack: ""
    },
    {
      image: imageSource8,
      fullImage: fullImageSource8,
      name: "Cat Personality Test",
      description: "",
      websiteUrl: "https://fac18.github.io/week3-gmno-prrr-api/",
      githubUrl: "https://github.com/fac18/week3-gmno-prrr-api",
      stack: ""
    }
  ];
  const [imageCount, setImageCount] = React.useState(0);

  const image = imageArray[imageCount].image;
  const name = imageArray[imageCount].name;
  const fullImage = imageArray[imageCount].fullImage;
  const description = imageArray[imageCount].description;
  const websiteUrl = imageArray[imageCount].websiteUrl;
  const githubUrl = image[imageCount].githubUrl;
  const stack = image[imageCount].stack;

  const [togglePlay, setTogglePlay] = React.useState(false);
  console.log(togglePlay);

  React.useEffect(() => {
    let imageSlide;
    if (!togglePlay) {
      imageSlide = setInterval(() => {
        setImageCount(imageCount =>
          imageCount < imageArray.length - 1 ? imageCount + 1 : 0
        );
      }, 2000);
      return () => clearInterval(imageSlide);
    } else {
      clearInterval(imageSlide);
    }
  }, [togglePlay, imageArray.length]);
  return (
    <div className="slideshow">
      <h1>slideshow test</h1>
      <Link
        to={{
          pathname: "/singleproject",
          slideshowProps: {
            fullImage: fullImage,
            name: name,
            description: description,
            websiteUrl: websiteUrl,
            githubUrl: githubUrl,
            stack: stack
          }
        }}
      >
        <img src={image} alt="" />
        <p className="white-text">{name}</p>
      </Link>
      <div className="button-container">
        <button
          onClick={() =>
            setImageCount(
              imageCount < imageArray.length - 1 ? imageCount + 1 : 0
            )
          }
        >
          Next
        </button>
        <button onClick={() => setTogglePlay(!togglePlay)}>Play/Pause</button>
        <button
          onClick={() =>
            setImageCount(
              imageCount > 0 ? imageCount - 1 : imageArray.length - 1
            )
          }
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
