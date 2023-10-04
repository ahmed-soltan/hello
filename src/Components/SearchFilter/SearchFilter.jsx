import { useEffect } from 'react';
import UseFireStore from '../../firebase/UseFireStore';
import { filterDashboardProductsBySearch } from '../../Store/productsStore';
import {useDispatch } from 'react-redux'

const SearchFilter = () => {
    const { products } = UseFireStore();

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(filterDashboardProductsBySearch(products))

    }, [products,dispatch ]);

    const handleInput = (e) => {
        const inputValue = e.target.value
    
        console.log(inputValue)
        const filteredItems = products.filter(product => product.title.toLowerCase().includes(inputValue.toLowerCase()) )
        console.log(filteredItems)
        dispatch(filterDashboardProductsBySearch(inputValue==="" ? products : filteredItems))
    }



    return (
        <div className='w-100  bg-white py-3 px-2 d-flex align-items-start justify-content-start'>
           <form className='bg-white py-3 px-2 d-flex align-items-center justify-content-center w-100' onSubmit={(e)=>e.preventDefault()}>
            <input style={{width:"100%" , borderRadius:"5px" , border:"1px solid black"}} type='text' placeholder='Search Product' onChange={handleInput} className="form-group py-2 px-3 "/>
           </form>
           
        </div>
    );
};

export default SearchFilter;