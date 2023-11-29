import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Createjob from "./pages/Createjob.jsx";
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-job" element={<Createjob />} />        
      </Routes>
    </Router>
  );
}

export default App;
