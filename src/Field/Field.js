import { useEffect, useState } from 'react';
import icon from './loupe.png';
import { useNavigate } from "react-router";
import './style.css';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

export const Field = ({setSearch}) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from(".input-button", {y: -30, duration: 5, opacity: 0, delay: 3});
  })

  const handleText = (e) => {
    setText(e.target.value);
  }
  const handleSearch = () => {
    setSearch(text);
  }
  useEffect(() => {
    if (text.length === 0) {
      setSearch("");
    } else {
      setSearch(text);
    }
  }, [text, setSearch]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  }
    return (
        <div className="container-header">
          <div className="header-logo">
            <img className="logo" src="https://avatars.mds.yandex.net/i?id=2a00000179f493cca6c27200cead502d1752-4012839-images-thumbs&n=13" alt="logo" width="100px"/>
            <h1>DiamArt</h1>
          </div>
          <form className="input-button" onSubmit={onFormSubmit}>
            <input value={text} className="field" onChange={handleText} />
            <button className="loupe" onClick={() => {navigate('/shop')}}><img src={icon} width="30px" height="30px" alt="icon"/></button>
          </form>
        </div>
    )
}