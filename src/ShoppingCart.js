import React, { useState } from "react";
import { data } from "./data";
import { Table } from "./Table";

export const ShoppingCart = () => {
    const [selectedItems, setSelectedItems] = useState(data);
    const result = selectedItems.reduce(
        (previousValue, currentItem) =>
        previousValue + currentItem.count * currentItem.price,
        0
    );
    const Total = (
        <div>
            <span className="total-amount">
                Total amount: €<span className="number">{result}</span>
            </span>
            <button className="order">ORDER</button>
            <button className="delete-all" onClick={() => setSelectedItems([])}>DELETE ALL</button>
        </div>
    );
    const removeItem = (id) => {
        let newItems = selectedItems.filter( item => item.id !== id);
        setSelectedItems(newItems)
    }
    const increaseCount = (id) => {
        setSelectedItems(selectedItems.map((item) => {
            if (item.id === id) {
                item.count++;
            }
            return item;

        }));
    }
    const decreaseCount = (id, count) => {
        if (count < 2){
            removeItem(id);
        } else {
        setSelectedItems(selectedItems.map((item) => {
            if (item.id === id) {
                item.count--;
            }
            return item;

        }));
    }
    }
    return(
        <div className="cart-cont">
            <h2 className="about-header">Shopping Cart</h2>
            {selectedItems.length === 0 ? 
            <h3>Your cart is empty</h3>
            
            : <Table 
            selectedItems={selectedItems} 
            removeItem={removeItem} 
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}/>
        }
            {!!selectedItems.length && Total}
        
        </div>
    )
}