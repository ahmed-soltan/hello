import  {useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementQuantity, decrementQuantity, deleteItem, resetCart } from '../../Store/productsStore'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import { ToastContainer , toast } from 'react-toastify';

const CartProducts = () => {
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const dispatch = useDispatch()
    const CartProduct = useSelector((state) => state.cart.cartProducts)
    const [totalAmount , setTotalAmount] = useState(0)
    useEffect(()=>{
        let price =0
        CartProduct && CartProduct.map((item)=>{
          price += (item.price - Math.floor((item.discount * item.price) / 100))*item.quantity
          return price
        })
        setTotalAmount(price.toFixed(2))
      },[CartProduct])
    return (
        <div className='my-5 table-responsive'>
            {cartProducts.length !== 0 ? <>
                <MDBTable align='middle' responsive>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Image</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Category</th>
                            <th scope='col' className='text-center'>quantity</th>
                            <th scope='col'>Total Price</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {cartProducts &&
                            cartProducts.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>{product.title}</p>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>${product.price - Math.floor((product.discount * product.price) / 100)}</p>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>{product.category}</p>
                                    </td>
                                    <td >
                                        <span className='fs-4 bg-black text-white px-3 py-1' style={{ cursor: "pointer" }} onClick={() => dispatch(decrementQuantity(product.id))}>-</span>
                                        <input type='number' className='fw-normal mb-1 mx-3 fs-5' value={product.quantity} style={{width:"100px"}} />
                                        <span className='fs-4 bg-black text-white px-3 py-1' style={{ cursor: "pointer" }} onClick={() => dispatch(incrementQuantity(product.id))}>+</span>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>${totalAmount}</p>
                                    </td>

                                    <td >
                                        <i className='fa-solid fa-trash text-danger' onClick={() => dispatch(deleteItem(product.id))& toast.error(<span className='fs-6'>{product.title} is removed to the cart</span>)}></i>
                                    </td>
                                </tr>
                            ))}
                    </MDBTableBody>
                </MDBTable>
                <NavLink to="/products" className='btn btn-black me-2'>Continue Shopping</NavLink>
                <button className='btn btn-danger' style={{backgroundColor:"rgb(158, 40, 40) !important"}} onClick={() => dispatch(resetCart())}>Clear Cart</button></> : <div>
                <h1>The Cart is Empty, Go and Buy Some Products</h1>
                 <NavLink to='/products' className="btn btn-black mt-3 ">Go Shopping</NavLink>
                </div>}
                <ToastContainer
               position='top-left'
               autoClose={2000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               pauseOnHover
               draggable
               theme='dark'

            />
        </div>
    )
}

export default CartProducts