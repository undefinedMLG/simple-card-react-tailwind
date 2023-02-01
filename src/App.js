import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import GetAll from "./components/GetAll";
import Detail from "./pages/Detail";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Products from "./pages/Products";


function App() {
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail/:id_barang" element={<Detail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}



export default App;
