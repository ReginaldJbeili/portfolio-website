import React from "react";

import Landing from "./Components/Landing";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Nav from "./Components/Nav";
import Contact from "./Components/Contact";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Landing />
        <Nav />
        <About />
        <Projects />
        <Contact />
      </main>
    </BrowserRouter>
  );
};

export default App;
