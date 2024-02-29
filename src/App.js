
import React, { useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from "./About/About";
import Home from "./Home/Home";
import './App.css';
import Shop from "./Shop/Shop";
import Contact from "./Contact/Contact";
import { Field } from "./Field/Field";
import { data } from "./data";
import { Cart } from "./Cart/Cart";
import { Navbar } from "./Navbar/Navbar";

function App() {
    const [search, setSearch] = useState("");
    
    const filteredProducts = useMemo( () => data.filter((product) => {
      return product.searchTerm.toLowerCase().includes(search.toLowerCase())
    }), [search])

  return (
  <Router>
    <div className="menu-container">
    <div className="header">
      <Field search={search} setSearch={setSearch} />
      <Navbar/>
    </div>
    <Routes>
      <Route path = "/Jewelry-project" element={<Home/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/shop" element={<Shop filteredProducts={filteredProducts} />}/>
      <Route path = "/contact" element={<Contact/>}/>
      <Route path = "/cart" element={<Cart/>}/>
    </Routes>
    </div>
  </Router>
  )
}

export default App;
