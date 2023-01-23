import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home/Home";
import AllProducts from "./Pages/Products/AllProducts";
import Honeys from "./Pages/Products/Honeys";
import ScrollToTop from "./Utils/ScrollToTop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Products/AllProducts" element={<AllProducts/>}/>
        <Route path="/Products/Honeys" element={<Honeys/>}/>
      </Routes>
      <ScrollToTop/>
    </>
  );
}

export default App;
