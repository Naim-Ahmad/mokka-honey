import React from "react";
import { Route, Routes } from 'react-router-dom';
import Modal from "./Components/Modal";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Layouts/Footer";
import NavBar from './Layouts/NavBar';
import About from './Pages/About/About';
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home/Home";
import AllProducts from "./Pages/Products/AllProducts";
import Ghee from './Pages/Products/Ghee';
import Honeys from "./Pages/Products/Honeys";
import Oil from "./Pages/Products/Oil";

function App() {
  return (
    <>
      <NavBar />
      <Modal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Products/AllProducts" element={<AllProducts />} />
        <Route path="/Products/Honeys" element={<Honeys />} />
        <Route path="/Products/Oil" element={<Oil />} />
        <Route path="/Products/ghee" element={<Ghee />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
