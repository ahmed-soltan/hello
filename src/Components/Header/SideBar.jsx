import { useEffect, useState } from 'react';
import UseFireStore from '../../firebase/UseFireStore';
import {  sendData } from '../../Store/productsStore';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './Header.css'
import PropTypes from "prop-types";

const SideBar = ({ show, onHide }) => {
    const { products } = UseFireStore();
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        const displayMenuButtons = () => {
            const categories = products.reduce((values, item) => {
                if (!values.includes(item.category)) {
                    values.push(item.category);
                }
                return values;
            }, ['all']);
            const menuOptions = categories.map((category) => (
                <li onClick={() => handleInput(category)} className='text-black fs-5 my-2 fw-bold' style={{ cursor: "pointer" }} value={category === "all" ? "" : category} key={category}>
                    {category}
                </li>
            ));
            setData(menuOptions);
        };
        
        
        displayMenuButtons();
        const handleInput = (category) => {
            console.log(category)
            const filteredItems = products.filter((item) => item.category === category);
            dispatch(sendData( category==="all" ? products:filteredItems))
            navigate('/categoryselect')
            onHide(true)
        };
    }, [products , dispatch  , onHide , show , navigate]);
    

    const hide = () => {
        onHide(!show);
    };

    return (
        <div className={show ? "showSideBars p-2" : "hideSideBars p-2 "}>
            <div className='d-flex align-items-center justify-content-between mb-2'>
                <h4 className='text-black fw-bold m-0'>Categories</h4>
                <i className='fa-solid fa-x m-0 fs-5 text-black' onClick={hide}></i>
            </div>
            <ul className='py-2 px-1 w-100'>
                {data}
            </ul>
            <hr className='w-100' />
            
        </div>
    );
};

SideBar.propTypes = {
    show: PropTypes.any.isRequired,
    onHide: PropTypes.any.isRequired
  }
export default SideBar;
