import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

import "./i18n";
import "./App.css";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <About />
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <Projects />
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
