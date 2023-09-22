import React from "react";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Tour from "./components/Tour";
import Review from "./components/Review";
import Reservtion from "./Authentication/Reservtion";


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Tour" element={<Tour/>} />
        <Route path="/Review" element={<Review/>} />
        <Route path="/Reservation" element={<Reservtion/>}/>
      </Routes>
    </div>
  );
}

export default App;
