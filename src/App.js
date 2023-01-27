import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GetAll from "./components/Card"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GetAll/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}



export default App;
