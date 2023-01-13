import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Pages/About" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
