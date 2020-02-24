import React from "react";
import "./Developer.css";
import html from "../../assets/stack-icons/front-end/html.svg";
import css from "../../assets/stack-icons/front-end/css.svg";
import javascript from "../../assets/stack-icons/front-end/javascript.svg";
import markdown from "../../assets/stack-icons/front-end/markdown.svg";
import react from "../../assets/stack-icons/front-end/react.svg";
import reactRouter from "../../assets/stack-icons/front-end/react-router.svg";
import styledComponents from "../../assets/stack-icons/front-end/styled-components.svg";
import H4 from "../Styles/H4.style";

import auth from "../../assets/stack-icons/back-end/auth.svg";
import postgresql from "../../assets/stack-icons/back-end/postgresql.svg";
import handlebars from "../../assets/stack-icons/back-end/handlebars.svg";
import express from "../../assets/stack-icons/back-end/express.svg";
import airtable from "../../assets/stack-icons/back-end/airtable.svg";
import node from "../../assets/stack-icons/back-end/node.svg";
import lambda from "../../assets/stack-icons/back-end/lambda.svg";

import jest from "../../assets/stack-icons/test/jest.svg";
import reactTestingLibrary from "../../assets/stack-icons/test/react-testing-library.svg";
import tapeNockSupertest from "../../assets/stack-icons/test/tape-nock-supertest.svg";

import codeCov from "../../assets/stack-icons/tools/codecov.svg";
import figma from "../../assets/stack-icons/tools/figma.svg";
import git from "../../assets/stack-icons/tools/git.svg";
import github from "../../assets/stack-icons/tools/github.svg";
import googleAnalytics from "../../assets/stack-icons/tools/google-analytics.svg";
import heroku from "../../assets/stack-icons/tools/heroku.svg";
import netlify from "../../assets/stack-icons/tools/netlify.svg";
import travis from "../../assets/stack-icons/tools/travis.svg";

import accessibility100 from "../../assets/stack-icons/methodologies/accessibility100.svg";
import agile from "../../assets/stack-icons/methodologies/agile.svg";
import pairMobProgramming from "../../assets/stack-icons/methodologies/pair-mob-programming.svg";
import refactor from "../../assets/stack-icons/methodologies/refactor.svg";
import scrum from "../../assets/stack-icons/methodologies/scrum.svg";
import sensitiveDataHandling from "../../assets/stack-icons/methodologies/sensitive-data-handling.svg";
import tdd from "../../assets/stack-icons/methodologies/tdd.svg";

import atom from "../../assets/stack-icons/utilities/atom.svg";
import vscode from "../../assets/stack-icons/utilities/vscode.svg";
import terminal from "../../assets/stack-icons/utilities/terminal.svg";
import powershell from "../../assets/stack-icons/utilities/powershell.svg";

const frontEnd = [
  {
    image: html,
    alt: "html5",
    title: "HTML5"
  },
  {
    image: css,
    alt: "css5",
    title: "CSS5"
  },
  {
    image: javascript,
    alt: "Javascript ES6+",
    title: "JavaScript ES6+"
  },
  {
    image: markdown,
    alt: "Markdown",
    title: "Markdown"
  },
  {
    image: react,
    alt: "React",
    title: "React"
  },
  {
    image: reactRouter,
    alt: "React Router",
    title: "React Router"
  },
  {
    image: styledComponents,
    alt: "Styled Components",
    title: "Styled Components"
  }
];

const backEnd = [
  {
    image: auth,
    alt: "Auth, Bcrypt, JWT",
    title: "Auth, Bcrypt, JWT"
  },
  {
    image: postgresql,
    alt: "PostgreSQL",
    title: "PostgreSQL"
  },
  {
    image: handlebars,
    alt: "Handlebars",
    title: "Handlebars"
  },
  {
    image: express,
    alt: "Express",
    title: "Express"
  },
  {
    image: airtable,
    alt: "Airtable",
    title: "Airtable"
  },
  {
    image: node,
    alt: "NodeJS",
    title: "NodeJS"
  },
  {
    image: lambda,
    alt: "Netlify Lambda Functions",
    title: "Netlify Lambda Functions"
  }
];

const test = [
  {
    image: jest,
    alt: "Jest",
    title: "Jest"
  },
  {
    image: reactTestingLibrary,
    alt: "React Testing Library",
    title: "React Testing Library"
  },
  {
    image: tapeNockSupertest,
    alt: "Tape, Nock, Supertest",
    title: "Tape, Nock, Supertest"
  }
];

const tools = [
  {
    image: codeCov,
    alt: "Codecov",
    title: "Codecov"
  },
  {
    image: figma,
    alt: "Figma",
    title: "Figma"
  },
  {
    image: git,
    alt: "Git",
    title: "Git"
  },
  {
    image: github,
    alt: "Github",
    title: "Github"
  },
  {
    image: googleAnalytics,
    alt: "Google Analytics",
    title: "Google Analytics"
  },
  {
    image: heroku,
    alt: "Heroku",
    title: "Heroku"
  },
  {
    image: netlify,
    alt: "Netlify",
    title: "Netlify"
  },
  {
    image: travis,
    alt: "Travis",
    title: "Travis"
  }
];

const methodologies = [
  {
    image: accessibility100,
    alt: "Accessibility 100%",
    title: "Accessibility 100%"
  },
  {
    image: agile,
    alt: "Agile",
    title: "Agile"
  },
  {
    image: pairMobProgramming,
    alt: "Pair/Mob Programming",
    title: "Pair/Mob Programming"
  },
  {
    image: refactor,
    alt: "Refactoring",
    title: "Refactoring"
  },
  {
    image: scrum,
    alt: "Scrum",
    title: "Scrum"
  },
  {
    image: sensitiveDataHandling,
    alt: "Sensitive Data Handling",
    title: "Sensitive Data Handling"
  },
  {
    image: tdd,
    alt: "Test-Driven Development",
    title: "Test-Driven Development"
  }
];

const utilities = [
  {
    image: atom,
    alt: "Atom",
    title: "Atom"
  },
  {
    image: vscode,
    alt: "VS Code",
    title: "VS Code"
  },
  {
    image: terminal,
    alt: "Terminal",
    title: "Terminal"
  },
  {
    image: powershell,
    alt: "Powershell",
    title: "Powershell"
  }
];
const Developer = () => {
  return (
    <article className="developer-story">
      <div className="box-container">
        <H4>Front End</H4>
        <div className="icon-container">
          {frontEnd.map(element => {
            return (
              <img
                key={element.title}
                src={element.image}
                alt={element.alt}
                title={element.title}
              />
            );
          })}
        </div>
      </div>

      <div className="box-container">
        <H4>Tools</H4>
        <div className="icon-container">
          {tools.map(element => {
            return (
              <img
                key={element.title}
                src={element.image}
                alt={element.alt}
                title={element.title}
              />
            );
          })}
        </div>
      </div>

      <div className="box-container">
        <H4>Back End</H4>
        <div className="icon-container">
          {backEnd.map(element => {
            return (
              <img
                key={element.title}
                src={element.image}
                alt={element.alt}
                title={element.title}
              />
            );
          })}
        </div>
      </div>

      <div className="box-container">
        <H4>Methods</H4>
        <div className="icon-container">
          {methodologies.map(element => {
            return (
              <img
                key={element.title}
                src={element.image}
                alt={element.alt}
                title={element.title}
              />
            );
          })}
        </div>
      </div>

      <div className="box-container">
        <H4>Tests</H4>
        <div className="icon-container">
          {test.map(element => {
            return (
              <img
                key={element.title}
                src={element.image}
                alt={element.alt}
                title={element.title}
              />
            );
          })}
        </div>
      </div>

      <div className="box-container">
        <H4>Utilities</H4>
        <div className="icon-container">
          {utilities.map(element => {
            return (
              <img
                key={element.title}
                src={element.image}
                alt={element.alt}
                title={element.title}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Developer;
