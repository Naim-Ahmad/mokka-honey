import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from "./Pages/Home";
import Services from "./Pages/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Pages/About" element={<About/>}/>
        <Route path="/Pages/Services" element={<Services/>}/>

      </Routes>
    </>
  );
}

export default App;
