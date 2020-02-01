import React from "react";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <body>
        <Landing />
        <About />
        <Projects />
      </body>
      <Footer />
    </>
  );
};

export default App;
