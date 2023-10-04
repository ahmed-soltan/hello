import { useState } from 'react'
import {useDispatch } from 'react-redux'
import { closeSearchBar, filterProductsBySearch , sendData } from '../../Store/productsStore'
import UseFireStore from '../../firebase/UseFireStore'
import { useNavigate } from 'react-router-dom'
import './Header.css'
const SearchBar = () => {
    const { products } = UseFireStore();
    const [filter, setFilter] = useState([]);
    const [filterValue, setFilterValue] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSearch = (e) => {
        const inputValue = e.target.value
        setFilterValue(inputValue)
        const filteredItems = products.filter(product => product.title.toLowerCase().includes(inputValue.toLowerCase()))
        setFilter(filteredItems)
        dispatch(filterProductsBySearch(filter))
    }
 
    const clearSearch = () =>{
        dispatch(closeSearchBar())
        setFilterValue("")
        setFilter([])
    }

    const sendSearchData = (item) =>{

        console.log(item)
        // dispatch(filterProducts(item))
        setFilterValue(item.title)
        setFilter([])
        dispatch(sendData(item))
        navigate('/singleproduct')
    }
    return (
        <div className='search'>
            <form className='d-flex align-items-center justify-content-end form w-100' >
                <input className='input' placeholder='search' onChange={handleSearch} value={filterValue} type='text' />
                {filter.length === 0 ?<i className="fa-solid fa-magnifying-glass bg-warning text-black search-icon" ></i>:<i className="fa-solid fa-x bg-warning text-black search-icon" onClick={()=>clearSearch()}></i>}
            </form>

           <div className='search-result'>
                {filter.map(item =>
                    <div onClick={()=>sendSearchData(item)} key={item.id} className='d-flex align-items-start justify-content-start flex-column'>
                        <span className='text-black fw-bold'>{item.title}</span>
                        <small className='text-dark'>{item.description}</small>
                    </div>)}
           </div>
        </div>
    )
}

export default SearchBar