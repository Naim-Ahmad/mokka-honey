import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import AllProducts from "./Pages/Products/AllProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Pages/About" element={<About/>}/>
        <Route path="/Pages/ContactUs" element={<ContactUs/>}/>
        <Route path="/Pages/Products/AllProducts" element={<AllProducts/>}/>

      </Routes>
    </>
  );
}

export default App;
