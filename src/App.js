import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import GetAll from "./components/GetAll";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Products2 from "./pages/Products2";

function App() {
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetAll />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/card" element={<Card />} />
          <Route path="/testing" element={<Products2 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}



export default App;
