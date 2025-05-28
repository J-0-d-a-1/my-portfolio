import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Hero from "./sections/Hero";

import "./i18n";
import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Contact />
    </>
  );
}

export default App;
