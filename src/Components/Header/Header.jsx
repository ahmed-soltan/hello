import  { Fragment, useContext, useEffect, useState } from 'react';
import './Header.css'
import { NavLink , useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { AuthContext } from '../../Context/Auth';
import Nav from './Nav';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
export default function Header() {
    const [showBasic, setShowBasic] = useState(false);
    const { user } = useContext(AuthContext)
    const CartProduct = useSelector((state) => state.cart.cartProducts)
    const [totalAmount , setTotalAmount] = useState(0)
    const quantity = CartProduct.length
    const navigate = useNavigate()
    useEffect(()=>{
      let price =0
      CartProduct && CartProduct.map((item)=>{
        price += (item.price - Math.floor((item.discount * item.price) / 100))*item.quantity
        return price
      })
      setTotalAmount(price.toFixed(2))
    },[CartProduct])

    return (
        <Fragment>
            <div className='container-fluid py-3 d-flex flex-column ' style={{ backgroundColor: "rgb(5, 33, 46)" }}>
                <nav className='d-flex align-items-center justify-content-between gap-5 px-3'>
                    <div className='logo d-flex align-items-center justify-content-between'>
                        <NavLink to='/' className='text-white mt-2 fs-1'>Hinamori</NavLink>
                    </div>
                     <SearchBar/>
                    <div className='nav '>
                        <ul className='d-flex justify-content-between mt-3 gap-5 navLinks'>
                            <NavLink  to="/favorite" className='d-flex align-items-center gap-3 justify-content-center text-white' style={{ width: "100px" }}>
                                <i className="fa-regular fa-heart fs-2"></i>
                                <NavLink to='/favorite' className='m-0 text-white'>Favorite wishList</NavLink>
                            </NavLink>
                            <NavLink className='d-flex align-items-center gap-3 justify-content-center text-white'>
                                <i className="fa-regular fa-user fs-2"></i>
                                <div className='d-flex flex-column'>
                                    {user ? <NavLink className="text-white account" onClick={() => auth.signOut() & navigate('/')}>
                                        Signout
                                    </NavLink> : <NavLink to="/login" className='m-0 text-white'>Login</NavLink>}

                                    <NavLink className='m-0 text-white'>Account</NavLink>
                                </div>
                            </NavLink>
                            <NavLink to="/cart" className='d-flex align-items-center gap-3 justify-content-center text-white' style={{ width: "100px" }}>
                                <i className="fa-solid fa-cart-shopping fs-2"></i>
                                <div className='d-flex flex-column align-items-center gap-1'>
                                    <span className='bg-white rounded text-black px-3 fw-bold' style={{ fontSize: "13px" }}>{quantity}</span>
                                    <span>${totalAmount}</span>
                                </div>

                            </NavLink>
                            {user ? (
                                <NavLink className='d-flex align-items-center gap-3 justify-content-center text-white user' style={{ width: "100%" }}>
                                    {user.photoURL && <img src={user.photoURL} style={{width:"40px" , heigh:"40px" , borderRadius:"50%"}}/>}
                                    <span className='fs-5'>{user.displayName ? `Hi, ${user.displayName}` : user.email}</span>
                                </NavLink>
                            ) : null
                        }
                        </ul>
                    </div>
                        <i onClick={() => setShowBasic(!showBasic)} className='fa-solid fa-bars text-white fs-4'></i>
                </nav>

                <nav className={showBasic ? "sidebar" : "hideNav"}>
                    <div className=''>
                        <ul className=' mt-3  navLinks'>
                            <NavLink  to="/favorite" className='d-flex align-items-center gap-3 justify-content-start my-5 text-white' style={{ width: "100%" }}>
                                <i className="fa-regular fa-heart fs-2"></i>
                                <NavLink className='m-0 text-white'>Favorite wishList</NavLink>
                            </NavLink>
                            <NavLink className='d-flex align-items-center gap-3 justify-content-start text-white my-5' style={{ maxWidth: "100%" }}>
                                <i className="fa-regular fa-user fs-2"></i>
                                <div className='d-flex flex-column'>
                                    {user ? <NavLink className="text-white" onClick={() => auth.signOut()}>
                                        Sign out
                                    </NavLink> : <NavLink to="/login" className='m-0 text-white'>Login</NavLink>}

                                    <NavLink className='m-0 text-white'>Account</NavLink>
                                </div>
                            </NavLink>
                            <NavLink to="/cart" className='d-flex align-items-center gap-3 justify-content-start text-white my-5' style={{ width: "100%" }}>
                                <i className="fa-solid fa-cart-shopping fs-2"></i>
                                <div className='d-flex flex-column align-items-center gap-1'>
                                    <span className='bg-white rounded text-black px-3 fw-bold' style={{ fontSize: "13px" }}>{quantity}</span>
                                    <span>${totalAmount}</span>
                                </div>

                            </NavLink>
                            {user ? (
                                <NavLink className='d-flex align-items-center gap-3 justify-content-start text-white my-5' style={{ width: "100%" }}>
                                    {user.photoURL && <img src={user.photoURL} style={{width:"40px" , heigh:"40px" , borderRadius:"50%"}}/>}
                                    <span className='fs-5'>{user.displayName ? `Hi, ${user.displayName}` : user.email}</span>
                                </NavLink>
                            ) : null
                           }
                            <SearchBar/>
                        </ul>
                    </div>
                </nav>
            </div>
            <Nav />
        </Fragment>
    );
}
