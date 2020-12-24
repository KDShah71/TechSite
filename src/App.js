import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "animate.css/animate.min.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/TechSite" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={About} />
      <Footer />
    </Router>
  );
}

export default App;
