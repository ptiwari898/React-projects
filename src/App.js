import Navigation from "./Components/Navigation.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import React from "react";

function App() {
  return (
    <div>
      <Navigation />
      <hr />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
