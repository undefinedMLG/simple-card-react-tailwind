import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import GetAll from "./components/GetAll";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetAll />} />
        <Route path="/home" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/detail/:id_barang" element={<Detail/>} />
      </Routes>
    </BrowserRouter>

  );
}



export default App;
