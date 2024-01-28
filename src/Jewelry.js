const Jewelry = ({jewelryList}) => {

    return (
        <div>
          {jewelryList.map((element => {
            const {id, name, searchTerm, price, image} = element;
            return (
                <div key={id}>
                    <img className="half-circle" src={image} width="300px" height="400px" alt="item"/>
                <div>
                <h3>{name}</h3>
                <h4>{searchTerm}</h4>
                <h2>{price}</h2>
                </div>
                </div>

            )
          }))}
        </div>
    )
}

export default Jewelry;