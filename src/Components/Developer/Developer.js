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
    title: "HTML5",
  },
  {
    image: css,
    alt: "css3",
    title: "CSS3",
  },
  {
    image: javascript,
    alt: "Javascript ES6+",
    title: "JavaScript ES6+",
  },
  {
    image: markdown,
    alt: "Markdown",
    title: "Markdown",
  },
  {
    image: react,
    alt: "React",
    title: "React",
  },
  {
    image: postgresql,
    alt: "PostgreSQL",
    title: "PostgreSQL",
  },
  {
    image: node,
    alt: "NodeJS",
    title: "NodeJS",
  },
  {
    image: lambda,
    alt: "Netlify Lambda Functions",
    title: "Netlify Lambda Functions",
  },
  {
    image: express,
    alt: "Express",
    title: "Express",
  },
  {
    image: jest,
    alt: "Jest",
    title: "Jest",
  },
  {
    image: reactTestingLibrary,
    alt: "React Testing Library",
    title: "React Testing Library",
  },
  {
    image: figma,
    alt: "Figma",
    title: "Figma",
  },
  {
    image: git,
    alt: "Git",
    title: "Git",
  },
  {
    image: github,
    alt: "Github",
    title: "Github",
  },
  {
    image: googleAnalytics,
    alt: "Google Analytics",
    title: "Google Analytics",
  },
  {
    image: heroku,
    alt: "Heroku",
    title: "Heroku",
  },
  {
    image: netlify,
    alt: "Netlify",
    title: "Netlify",
  },
  {
    image: travis,
    alt: "Travis",
    title: "Travis",
  },
  {
    image: tdd,
    alt: "Test-Driven Development",
    title: "Test-Driven Development",
  },
  {
    image: vscode,
    alt: "VS Code",
    title: "VS Code",
  },
  {
    image: terminal,
    alt: "Terminal",
    title: "Terminal",
  },
];

const Developer = () => {
  return (
    <article className="developer-story">
      <div className="box-container">
        <div className="icon-container">
          {frontEnd.map((element) => {
            return (
              <img
                key={element.title}
                src={element.image}
                alt={element.alt}
                title={element.title}
                className="stack-icon"
              />
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Developer;
