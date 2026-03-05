import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./Home/HomePage";
import Signup from "./Signup/Signup";
import Product from "./Product/ProductPage";
import Pricing from "./Pricing/Pricingpage";
import Support from "./Support/SupportPage";
import Navbar from "./Support/Navbar";
import Footer from "./Support/Footer";
import AboutPage from "./About/Aboutpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Support" element={<Support />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
);
