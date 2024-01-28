import { useState } from "react";
import { data } from "./data";
import icon from "./loupe.png";

function Field() {
    const [text, setText] = useState("")
    
    const handleText = (e) => {
        setText(e.target.value);
    }

    const handleSearch = () => {
        onSearch(text)
    }

    return (
        <div>
            <input className="field" type="text" value={text} onChange={handleText}/>
            <button type="button" onClick={handleSearch}><img className="icon-search" src={icon} alt="icon" width="20px"/></button>
            <ul>
                {selectedItems.map( (selectedItem) => ( 
                    <p key={selectedItem.id}>{selectedItem.searchTerm}</p>
                ))}
                </ul>
            </div>
        
    );

}
export default Field;