import React from "react";
import "./Developer.css";

const Developer = () => {
  return (
    <article className="developer-story">
      <div className="front-end-container">
        <p>Front End</p>
        <p>HTML5 CSS3 Javascript(ES6+)</p>
        <p>React(hooks) Styled Components</p>
        <p> React Router</p>
      </div>

      <div className="back-end-container">
        <p>Back End</p>
        <p>Node.js Express Handlebars</p>
        <p>PostgreSQL Airtable</p>
        <p>Netlify Lambda Functions</p>
        <p>BCrypt JWT</p>
      </div>

      <div className="tests-container">
        <p>Tests</p>
        <p>Jest Nock Tape</p>
        <p>React Testing Library</p>
        <p>Supertest</p>
      </div>

      <div className="tools-container">
        <p>Tools</p>
        <p>Git Github Figma</p>
        <p>Travis Codecov </p>
        <p>Netlify Heroku</p>
        <p>Google Analytics</p>
      </div>

      <div className="utilities-container">
        <p>Utilities</p>
        <p>VS Code Atom</p>
        <p>Terminal</p>
        <p>Powershell</p>
      </div>

      <div className="methods-container">
        <p>Methods</p>
        <p>Scrum Agile TDD</p>
        <p>Pair/Mob Programming</p>
        <p>Accessibility Refactoring</p>
        <p>Sensitive Data Handling</p>
      </div>
    </article>
  );
};

export default Developer;
