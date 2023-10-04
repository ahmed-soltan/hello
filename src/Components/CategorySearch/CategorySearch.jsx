import { useEffect, useState } from 'react';
import UseFireStore from '../../firebase/UseFireStore';
import { filterProducts } from '../../Store/productsStore';
import {useDispatch} from 'react-redux'

const CategorySearch = () => {
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
        <option className='categoryBtn fs-5' value={category==="all" ? "" : category} key={category}>
          {category}
        </option>
      ));
      setData(menuOptions);
    };
    
    // Set the initial filtered items to all products
    // filtration(filter === '' ? products : filterValue);
    displayMenuButtons();
    dispatch(filterProducts(products))
  }, [products, dispatch]);
  const handleInput = (e) => {
    const filteredItems = products.filter((item) => item.category === e.target.value);
    dispatch(filterProducts(e.target.value===""? products : filteredItems))
    
  };
  

  return (
    <div className='categoryContainer'>
        <select className='py-2 px-1 w-100' onChange={handleInput}>
          {data}
        </select>
    </div>
  );
};

export default CategorySearch;