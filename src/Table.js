import React from "react";

export const Table = ({selectedItems, removeItem, increaseCount, decreaseCount}) => (
    <table>
        <thead>
            <tr>
                <th>Product name</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {selectedItems.map(item => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                        <button className="count" onClick={() => decreaseCount(item.id, item.count)}>-</button>
                        <span>{item.count}</span>
                        <button className="count" onClick={() => increaseCount(item.id)}>+</button>
                    </td>
                    <td className="total-price">{item.price*item.count}</td>
                    <td>
                        <button className="remove" onClick={() => removeItem(item.id)}>X</button>
                    </td> 
                </tr> 
            ))}
        </tbody>
    </table>
)