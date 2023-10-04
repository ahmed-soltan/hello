import { useEffect, useState } from 'react';
import UseFireStore from '../../firebase/UseFireStore';
import { filterProducts } from '../../Store/productsStore';
import {useDispatch} from 'react-redux'

import './style.css'
const Filter = () => {
  const { products } = UseFireStore();
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    const displayMenuButtons = () => {
      const categories = products.reduce((values, item) => {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      }, ['all']);
      const menuOptions = categories.map((category) => (
        <button onClick={()=>handleInput(category)} className='btn btn-black categoryBtn fw-bold' value={category==="all" ? "" : category} key={category}>
          {category}
        </button>
      ));
      setData(menuOptions);
    };
    
 
    const handleInput = (category) => {
      console.log(category)
      const filteredItems = products.filter((item) => item.category === category);
      dispatch(filterProducts(category==="all"? products : filteredItems))
      
    };
    displayMenuButtons();
    dispatch(filterProducts(products))
  }, [products , dispatch]);
  

  return (
    <div className='categoryContainer'>
        <h4 className='text-black fw-bold'>Categories</h4>
        <ul className='py-2 px-1 w-100'>
          {data}
        </ul>
        <hr className='w-100'/>
    </div>
  );
};

export default Filter;