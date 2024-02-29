import { useState } from "react";
import { ChangeQuantity } from "../Cart/ChangeQuantity";
import { addItemToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { ProductInfo } from "../ProductInfo/ProductInfo";
import './style.css';

const Collection = ({jewelryList, element}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

    return (
        <div className='products'>
          {jewelryList.map((element => {
            const {id, name, price, image, content} = element;
            return (
                <div className='product-card' key={id}>
                    <img className="half-circle" src={image} alt="item"/>
                <div>
                <h3 className='item-name'>{name}</h3>
                <h2 className='price'>€ {price}</h2>
                <ProductInfo content={content}/>
                <hr/>
                </div>
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <button className="btn-add" onClick={() => {dispatch(addItemToCart({element,quantity}))}}>Add to Cart</button>
                </div>

            )
          }))}
        </div>
    )
}

export default Collection;