import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Hero from "./sections/Hero";

import "./i18n";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
