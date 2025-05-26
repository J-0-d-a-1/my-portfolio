import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Hero from "./sections/Hero";

import "./i18n";
import "./App.css";
import About from "./sections/About";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
}

export default App;
