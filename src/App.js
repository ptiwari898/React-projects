import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Navigation />
      <hr />
      <div>
        <Routes>
          <Route path="/" elements={<Home />} />
          <Route path="/about" elements={<About />} />
          <Route path="/contact" elements={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
