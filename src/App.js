
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from "./About";
import Home from "./Home";
import './App.css';
import Shop from "./Shop";
import Contact from "./Contact";
import { ShoppingCart } from "./ShoppingCart";
import { Field } from "./Field";

function App({filteredProducts}) {
  
  useGSAP(() => {
    gsap.from(".link", {y: -30, duration: 5, opacity: 0, delay: 3});
    gsap.from(".header", {y: -30, duration: 3, opacity: 0, delay: 1});
  })


  return (<div>
  <Router>
    <div className="menu-container">
    
    <div className="header">
      <Field filteredProducts={filteredProducts}/>
    <nav>
      <Link className="link" to = "/Jewelry-project">Home</Link>
      <Link className="link" to = "/about">About</Link>
      <Link className="link" to = "/shop">Shop</Link>
      <Link className="link" to = "/contact">Contact</Link>
      <Link className="link" to = "/cart">Cart</Link>
    </nav>
    </div>
    <Routes>
      <Route path = "/Jewelry-project" element={<Home/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/shop" element={<Shop filteredProducts={filteredProducts}/>}/>
      <Route path = "/contact" element={<Contact/>}/>
      <Route path = "/cart" element={<ShoppingCart/>}/>
    </Routes>
    </div>
  </Router>
  </div>)
  
}

export default App;
