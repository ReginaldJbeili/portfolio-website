import React from "react";

import Landing from "./Components/Landing";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Contact from "./Components/Contact";

import "./App.css";

const App = () => {
  return (
    <>
      <main>
        <Landing />
        <Nav />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
