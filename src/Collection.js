
const Collection = ({jewelryList}) => {

    return (
        <div className='products'>
          {jewelryList.map((element => {
            const {id, name, price, image} = element;
            return (
                <div className='product-card' key={id}>
                    <img className="half-circle" src={image} alt="item"/>
                <div>
                <h3 className='item-name'>{name}</h3>
                <h2 className='price'>{price}</h2>
                </div>
                <button className="btn-add">Add to Cart</button>
                </div>

            )
          }))}
        </div>
    )
}

export default Collection;