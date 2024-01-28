import { useState } from 'react';
import { data } from './data';

import Buttons from './Buttons';
import Collection from './Collection';

function Shop() {
  const [jewelryList, setJewelryList] = useState(data);

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