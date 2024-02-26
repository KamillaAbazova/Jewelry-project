export const ChangeQuantity = ({quantity, setQuantity}) => {

    const removeQuantity = () => {
        if (quantity <=1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }
    return (<div className="quantityButtons">
        <button className="qiantity" onClick={removeQuantity}>-</button>
        <span>{quantity}</span>
        <button className="qiantity" onClick={addQuantity}>+</button>
    </div>)
}
