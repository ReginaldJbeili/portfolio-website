import React from "react";

import Landing from "../Landing/Landing";
import About from "../About/About";
import Projects from "../Project/Projects";
import Nav from "../Nav/Nav";
import Contact from "../Contact/Contact";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MobileNav from "../MobileNav/MobileNav";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <MobileNav />
        <Landing />

        <About />
        <Projects />
        <Contact />
      </main>
    </BrowserRouter>
  );
};

export default App;
