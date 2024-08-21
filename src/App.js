import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Component/Navbar";
import Question from "./pages/ Question";
import AboutInfomesa from "./pages/AboutInfomesa";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Question />} />
        <Route path="/about" element={<AboutInfomesa />} />
      </Routes>
    </Router>
  );
};

export default App;
