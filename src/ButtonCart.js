import { useState } from "react";


const ButtonCart = ({jewelryList, id}) => {
    const [orderList, setOrderList] = useState([]);

    const addItem = (id) => {
        let newOrderList = orderList.filter(order => order.id === id);
        setOrderList(newOrderList)

    }
    return (
        <div>
        <div>
            <button onClick={() => addItem(id)}>Add to the Cart</button>
        </div>
        <div>
            <p>{orderList}</p>
        </div>
        </div>

    )
}

export default ButtonCart;