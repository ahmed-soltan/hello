import { useEffect } from 'react';
import UseFireStore from '../../firebase/UseFireStore';
import { filterProductsByRating } from '../../Store/productsStore';
import {  useDispatch } from 'react-redux'
import { MDBRadio } from 'mdb-react-ui-kit';

import './style.css'
const FilterByRating = () => {
    const { products } = UseFireStore();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(filterProductsByRating(products))

    }, [products , dispatch]);
    const handleInput = (rate) => {
        const filteredItems = products.filter(product => Math.floor((product.rating)) === rate  )
        dispatch(filterProductsByRating(rate === ""? products : filteredItems))
    }



    return (
        <div className='categoryContainer'>
            <h4 className='text-black fw-bold'>Rating</h4>
            <ul className='py-2 px-1 w-100'>
                <li className='d-flex align-items-center text-black'>
                    <MDBRadio type="radio" onClick={() => handleInput("")} name='flexRadioDefault' label='All' id='flexRadioDefault1' />
                </li>
                <li className='d-flex align-items-center text-black'>
                    <MDBRadio type="radio" onClick={() => handleInput(1)} name='flexRadioDefault' id='flexRadioDefault1'  />
                     <div className="d-flex align-items-center ">
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 " style={{color:"#666"}}></i>
                    <i className="fa-solid fa-star fs-6 " style={{color:"#666"}}></i>
                    <i className="fa-solid fa-star fs-6 " style={{color:"#666"}}></i>
                    <i className="fa-solid fa-star fs-6 " style={{color:"#666"}}></i>
                    </div>
                </li>
                <li className='d-flex align-items-center text-black'>
                    <MDBRadio type="radio" onClick={() => handleInput(2)} name='flexRadioDefault' id='flexRadioDefault2'  />
                     <div className="d-flex align-items-center ">
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6" style={{color:"#666"}}></i>
                    <i className="fa-solid fa-star fs-6" style={{color:"#666"}}></i>
                    <i className="fa-solid fa-star fs-6" style={{color:"#666"}}></i>
                    </div>
                </li>
                <li className='d-flex align-items-center text-black'>
                    <MDBRadio type="radio" onClick={() => handleInput(3)} name='flexRadioDefault' id='flexRadioDefault3'  />
                    <div className="d-flex align-items-center ">
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 " style={{color:"#666"}}></i>
                    <i className="fa-solid fa-star fs-6 " style={{color:"#666"}}></i>
                    </div>
                </li>
                <li className='d-flex align-items-center text-black'>
                    <MDBRadio type="radio" onClick={() => handleInput(4)} name='flexRadioDefault' id='flexRadioDefault4'  />
                     <div className="d-flex align-items-center ">
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 " style={{color:"#666"}}></i>
                    </div>
                </li>
                <li className='d-flex align-items-center text-black'>
                    <MDBRadio type="radio" onClick={() => handleInput(5)} name='flexRadioDefault' id='flexRadioDefault4'  />
                     <div className="d-flex align-items-center ">
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    <i className="fa-solid fa-star fs-6 text-warning"></i>
                    </div>
                </li>

            </ul>
        </div>
    );
};

export default FilterByRating;