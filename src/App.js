import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import GetAll from "./components/GetAll";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetAll />} />
        <Route path="/home" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>

  );
}



export default App;
