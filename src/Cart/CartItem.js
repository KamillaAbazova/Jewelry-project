import { useDispatch } from "react-redux";
import { data } from "../data"
import { removeItemFromCart } from "../redux/cartSlice"

export const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const jewelries = data.find(item => item.id === cartItem.itemId);
    

    return (<div>
        <table>
        <tbody>
            
                <tr key={jewelries.id}>
                    <td>{jewelries.name}</td>
                    <td className="total-price">€ {jewelries.price*cartItem.quantity}</td>
                    <td>
                        <button onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>X</button>
                    </td> 
                </tr> 
        </tbody>
    </table>

    </div>)
}