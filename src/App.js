import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/pages/about/about";
import Portfolio from "./components/pages/portfolio/portfolio";
import Contact from "./components/pages/contact/contact";
import Resume from "./components/pages/resume/resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app--container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
