
import React, { useEffect, useMemo, useRef, useState } from "react";
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
import icon from "./loupe.png"
import { LoaderPage } from "./Loader/LoaderPage";
import { data } from "./data";

function App() {

  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [stateLoader, setStateLoader] = useState(true);
  
  const handleSearch = () => {
    setSearch(text)
  }

  const filteredProducts = useMemo( () => data.filter((product) => {
    return product.searchTerm.toLowerCase().includes(search.toLowerCase())
  }), [search])
 
  const onFormSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  }
 
  const inputRef = useRef();
 
  useGSAP(() => {
    gsap.from(".link", {y: -30, duration: 5, opacity: 0, delay: 3});
    gsap.from(".header", {y: -30, duration: 3, opacity: 0, delay: 1});
  })

  const focus = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false),3000);
    return () => clearTimeout(timer)
  }, [])


  return (<div>
  <Router>
    <div className="menu-container">
    {stateLoader && <LoaderPage />}
    
    <div className="header">
      <div className="header-logo">
      <img className="logo" src="https://avatars.mds.yandex.net/i?id=2a00000179f493cca6c27200cead502d1752-4012839-images-thumbs&n=13" alt="logo" width="100px"/>
      <h1>DiamArt</h1>
      </div>
      <form className="input-button" onSubmit={onFormSubmit}>
      <input ref={inputRef} value={text} className="field" onChange={e => setText(e.target.value)}/>
      <button className="loupe" onClick={focus}><img src={icon} width="30px" height="30px" alt="icon"/></button>
      </form>
    
    <nav>
      <Link className="link" to = "/">Home</Link>
      <Link className="link" to = "/about">About</Link>
      <Link className="link" to = "/shop">Shop</Link>
      <Link className="link" to = "/contact">Contact</Link>
      <Link className="link" to = "/cart">Cart</Link>
    </nav>
    </div>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/shop" element={<Shop/>}/>
      <Route path = "/contact" element={<Contact/>}/>
      <Route path = "/cart" element={<ShoppingCart/>}/>
    </Routes>
    </div>
  </Router>
  </div>)
  
}

export default App;
