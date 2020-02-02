import React from "react";

import Landing from "./Components/Landing";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <main>
        <Landing />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default App;
