import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../redux/cartSlice"
import { CartItem } from "./CartItem";

export const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return (<div>
        <img className="cartIcon" src="https://img.icons8.com/?size=80&id=LhRbsuC35iCh&format=png" alt="carticon"/>
        <h3 className="total">TOTAL: € {totalPrice}</h3>
        <table>
        <thead>
            <tr>
                <th>Product name</th>
                <th>Total price</th>
                <th>Remove</th>
            </tr>
        </thead>
        </table>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
    </div>)
}