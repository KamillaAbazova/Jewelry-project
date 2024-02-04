import { useEffect, useMemo, useRef, useState } from "react";
import { data } from './data';
import icon from './loupe.png';


export const Field = () => {

    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    
    const handleSearch = () => {
        setSearch(text)
      }

      useEffect(() => {
        if (text.length === 0) {
          setSearch("");
        } else {
          setSearch(text);
        }
      }, [text, setSearch]);

    
      const filteredProducts = useMemo( () => data.filter((product) => {
        return product.searchTerm.toLowerCase().includes(search.toLowerCase())
      }), [search])
     
      const onFormSubmit = (e) => {
        e.preventDefault();
        handleSearch();
      }
     
      const inputRef = useRef();
      const focus = () => {
        inputRef.current.focus()
      }
     
    return (
        <div>
          <div className="header-logo">
            <img className="logo" src="https://avatars.mds.yandex.net/i?id=2a00000179f493cca6c27200cead502d1752-4012839-images-thumbs&n=13" alt="logo" width="100px"/>
            <h1>DiamArt</h1>
          </div>
          <form className="input-button" onSubmit={onFormSubmit}>
            <input ref={inputRef} value={text} className="field" onChange={e => setText(e.target.value)}/>
            <button className="loupe" onClick={focus}><img src={icon} width="30px" height="30px" alt="icon"/></button>
          </form>
        </div>
    )
}