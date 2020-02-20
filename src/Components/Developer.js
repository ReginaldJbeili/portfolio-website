import React from "react";
import "./Developer.css";

const Developer = () => {
  return (
    <article className="developer-story">
      <div className="box-container">
        <h3>Front End</h3>
        <p>HTML5 CSS3 Javascript(ES6+)</p>
        <p>React(hooks) Styled Components</p>
        <p> React Router</p>
      </div>

      <div className="box-container">
        <h3>Back End</h3>
        <p>Node.js Express Handlebars</p>
        <p>PostgreSQL Airtable</p>
        <p>Netlify Lambda Functions</p>
        <p>BCrypt JWT</p>
      </div>

      <div className="box-container">
        <h3>Tests</h3>
        <p>Jest Nock Tape</p>
        <p>React Testing Library</p>
        <p>Supertest</p>
      </div>

      <div className="box-container">
        <h3>Tools</h3>
        <p>Git Github Figma</p>
        <p>Travis Codecov </p>
        <p>Netlify Heroku</p>
        <p>Google Analytics</p>
      </div>

      <div className="box-container">
        <h3>Utilities</h3>
        <p>VS Code Atom</p>
        <p>Terminal</p>
        <p>Powershell</p>
      </div>

      <div className="box-container">
        <h3>Methods</h3>
        <p>Scrum Agile TDD</p>
        <p>Pair/Mob Programming</p>
        <p>Accessibility Refactoring</p>
        <p>Sensitive Data Handling</p>
      </div>
    </article>
  );
};

export default Developer;
