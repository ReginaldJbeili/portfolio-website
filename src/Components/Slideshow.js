import React from "react";
import "./Slideshow.css";
import imageSource1 from "../assets/images/visual-reverse-image-search-v2_intro.jpg";
import imageSource2 from "../assets/images/pexels-photo-414612.jpeg";
import imageSource3 from "../assets/images/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";
const Slideshow = () => {
  const imageArray = [imageSource1, imageSource2, imageSource3];
  const [imageCount, setImageCount] = React.useState(0);
  const image = imageArray[imageCount];
  const [togglePlay, setTogglePlay] = React.useState(false);
  console.log(togglePlay);

  React.useEffect(() => {
    let imageSlide;
    if (!togglePlay) {
      imageSlide = setInterval(() => {
        setImageCount(imageCount =>
          imageCount < imageArray.length - 1 ? imageCount + 1 : 0
        );
      }, 1000);
      return () => clearInterval(imageSlide);
    } else {
      clearInterval(imageSlide);
    }
  }, [togglePlay, imageArray.length]);
  return (
    <div className="slideshow">
      <h1>slideshow test</h1>
      <img src={image} alt="" />
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
        <button
          onClick={() =>
            setImageCount(
              imageCount > 0 ? imageCount - 1 : imageArray.length - 1
            )
          }
        >
          Previous
        </button>
        <button onClick={() => setTogglePlay(!togglePlay)}>Play/Pause</button>
      </div>
    </div>
  );
};

export default Slideshow;
