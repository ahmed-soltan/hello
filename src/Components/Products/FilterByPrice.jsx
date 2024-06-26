import { useEffect } from 'react';
import UseFireStore from '../../firebase/UseFireStore';
import { filterProductsByPrice } from '../../Store/productsStore';
import { useDispatch } from 'react-redux'
import { MDBRadio } from 'mdb-react-ui-kit';
import PropTypes from "prop-types";

import './style.css'
const FilterByPrice = ({show}) => {
    const { products } = UseFireStore();
    const dispatch = useDispatch()
    const change = () =>{
        show(true)
        console.log("hello")
    }
    useEffect(() => {
        dispatch(filterProductsByPrice(products))

        
    }, [products , dispatch]);

    const handleInput = (price1, price2) => {
        console.log(price1, price2);
        const filteredItems = products.filter(product => product.price - Math.floor((product.discount * product.price) / 100) >= price1 && product.price - Math.floor((product.discount * product.price) / 100) <= price2)
        dispatch(filterProductsByPrice(price1 === "" && price2 === "" ? products : filteredItems))
    }


    return (
        <div className='categoryContainer'>
            <h4 className='text-black fw-bold'>Price</h4>
            <ul className='py-2 px-1 w-100'>
                <li className='text-black fs-5'>
                    <MDBRadio type="radio" onClick={() => handleInput("", "") & change()} name='flexRadioDefault' id='flexRadioDefault1' label='All' />
                </li>
                <li className='text-black fs-5'>
                    <MDBRadio type="radio" onClick={() => handleInput(0, 200) & change()} name='flexRadioDefault' id='flexRadioDefault1' label='$0-$200' />
                </li>
                <li className='text-black fs-5'>
                    <MDBRadio type="radio" onClick={() => handleInput(200, 400) & change()} name='flexRadioDefault' id='flexRadioDefault2' label='$200-$400' />
                </li>
                <li className='text-black fs-5'>
                    <MDBRadio type="radio" onClick={() => handleInput(400, 600) & change()} name='flexRadioDefault' id='flexRadioDefault3' label='$400-$600' />
                </li>
                <li className='text-black fs-5'>
                    <MDBRadio type="radio" onClick={() => handleInput(600, 1000) & change()} name='flexRadioDefault' id='flexRadioDefault4' label='$600-$1000' />
                </li>

            </ul>
            <hr style={{width:"400px"}}/>
        </div>
    );
};
FilterByPrice.propTypes = {
    show: PropTypes.any.isRequired,
  
  };
export default FilterByPrice;