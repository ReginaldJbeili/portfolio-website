import React from "react";
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
    let imageSlide = null;
    if (togglePlay === false) {
      imageSlide = setInterval(() => {
        setImageCount(imageCount =>
          imageCount < imageArray.length - 1 ? imageCount + 1 : 0
        );
        console.log(imageCount);
      }, 1000);
    } else if (togglePlay === true) {
      return clearInterval(imageSlide);
    }
  }, []);
  return (
    <div>
      <h1>slideshow test</h1>
      <button
        onClick={() => setImageCount(imageCount < 2 ? imageCount + 1 : 0)}
      >
        Next
      </button>
      <button
        onClick={() => setImageCount(imageCount > 0 ? imageCount - 1 : 2)}
      >
        Previous
      </button>
      <button onClick={() => setTogglePlay(!togglePlay)}>Pause</button>
      <img src={image} alt="" />
      <button
        onClick={() =>
          setInterval(() => {
            setImageCount(imageCount =>
              imageCount < imageArray.length - 1 ? imageCount + 1 : 0
            );
            console.log(imageCount);
          }, 1000)
        }
      >
        Play
      </button>
    </div>
  );
};

export default Slideshow;
