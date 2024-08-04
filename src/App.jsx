import React from "react";
import Header from "./Components/header/Header";
// import Nav from './Components/nav/Nav'
import About from "./Components/about/About";
import Experience from "./Components/experience/Experience";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Navbar from "./Components/nav/Navbar";

const App = () => {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div>
        <Navbar />
      </div>
      <div style={{ height: "calc(100% - 80px)" }}>
        <Header />
        {/* <Nav/> */}
        <About />
        <Experience />
        <Portfolio />

        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
