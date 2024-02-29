import './style.css';

function Buttons({filteredItems}) {
    
    return (
        <div className="buttons-cont">
            <button className="btn-category" onClick={() => filteredItems("Rings")}>Rings</button>
            <button className="btn-category" onClick={() => filteredItems("Earrings")}>Earrings</button>
            <button className="btn-category" onClick={() => filteredItems("Necklaces")}>Necklaces</button>
            <button className="btn-category" onClick={() => filteredItems("Bracelets")}>Bracelets</button>
            <button className="btn-category" onClick={() => filteredItems("Set")}>Jewelry sets</button>

        </div>
    )
}

export default Buttons;