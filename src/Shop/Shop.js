import { useEffect, useState } from 'react';
import './style.css';
import Buttons from '../Buttons/Buttons';
import Collection from '../Collection/Collection';
import { data } from '../data';

function Shop({filteredProducts}) {
  
  const [jewelryList, setJewelryList] = useState(filteredProducts);

  useEffect(() => {
    setJewelryList(filteredProducts)
  }, [filteredProducts])


  const filteredItems= (searchTerm) => {
   const newJewelry = data.filter(element => element.searchTerm === searchTerm);
    setJewelryList(newJewelry);
  }

  return (
    <div className='shop-cont'>
      <Buttons filteredItems = {filteredItems}/>
      <Collection jewelryList= {jewelryList}/>
    </div>
  );

}

export default Shop;