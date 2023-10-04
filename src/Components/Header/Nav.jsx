import{ useState, useContext , useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth';
import SideBar from './SideBar';

export default function Nav() {
    const { user } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true)
    }, [])
    const handleShow = () => {
        setShow((prevState)=>!prevState);
        console.log(show)
    }
    const handleHide = (value) => {
        setShow(value);
    };
    return (
        <nav style={{ backgroundColor: "rgb(32, 61, 75)" }} className='py-1'>
            <ul className='mt-2 d-flex align-items-center flex-wrap'>
                <SideBar show={show} onHide={handleHide} />
                <div className='d-flex align-items-center justify-content-center'>
                <i className="fa-solid fa-braille text-white"></i>
                    <h5 className='text-white mx-3' onClick={handleShow} style={{ cursor: "pointer" }}>CATEGORIES <span className='fs-4'>|</span></h5>
                </div>
                <NavLink to="/" className="text-white mx-3 fs-5" >HOME</NavLink>
                <NavLink to="/products" className="text-white mx-3 fs-5" >OUR STORE</NavLink>
                <NavLink to='blog' className="text-white mx-3 fs-5" >BLOGS</NavLink>
                <NavLink to="/contact" className="text-white mx-3 fs-5" >CONTACT</NavLink>
                {user && user.email === "admin@admin.com" ? <NavLink to="/dashboard" className="text-white mx-3 fs-5" >DASHBOARD</NavLink> : null}

            </ul>
        </nav>
    );
}