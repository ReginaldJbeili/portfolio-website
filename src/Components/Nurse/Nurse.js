import React from "react";
import "./Nurse.css";
import P from "../Styles/P.style";
import H1A from "../Styles/H1A.style";
import hellohub from "../../assets/background/hellohub.png";
import g2h from "../../assets/background/gateway2heritage.png";
import humble from "../../assets/background/humble.png";
import kch from "../../assets/background/kch.png";
import upm from "../../assets/background/upm.png";
import fac from "../../assets/background/fac.png";

const work = [
  {
    title: "Software Developer",
    description: "HelloHub",
    image: hellohub,
    alt: "Hellohub Icon",
  },
  {
    title: "Software Developer",
    description: "Gateway 2 Heritage",
    image: g2h,
    alt: "G2H Icon",
  },
  {
    title: "Software Developer",
    description: "Humble",
    image: humble,
    alt: "Humble Icon",
  },
  {
    title: "Operating Theatre Nurse",
    description: "King's College Hospital",
    image: kch,
    alt: "KCH Icon",
  },
];

const education = [
  {
    title: "Full Stack Web Development",
    description: "Founders and Coders",
    image: fac,
    alt: "FAC Icon",
  },
  {
    title: "Bachelor of Science in Nursing",
    description: "University of the Philippines Manila",
    image: upm,
    alt: "UP Manila Icon",
  },
];

const Nurse = () => {
  return (
    <article className="nurse-story">
      <div className="work-experience">
        <H1A>Work Experience</H1A>
        {work.map((element) => {
          return (
            <div className="work-container">
              <img key={element.alt} src={element.image} alt={element.alt} />
              <div>
                <P>{element.title}</P>
                <P>{element.description}</P>
              </div>
            </div>
          );
        })}
      </div>
      <div className="education">
        <H1A>Education</H1A>
        {education.map((element) => {
          return (
            <div className="education-container">
              <img key={element.alt} src={element.image} alt={element.alt} />
              <div>
                <P>{element.title}</P>
                <P>{element.description}</P>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Nurse;
