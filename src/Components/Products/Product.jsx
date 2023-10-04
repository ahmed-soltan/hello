import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';
import { ToastContainer , toast } from 'react-toastify';
import PropTypes from "prop-types";

import View from '../featuredProducts/View.jsx';
import { useDispatch } from 'react-redux'
import { addToCart , addToFav } from '../../Store/productsStore.jsx';
const Product = ({ product }) => {
    const dispatch = useDispatch()

    const stars = []
    for (let i = 0; i < Math.floor(product.rating); i++) {
        stars.push(<i key={i} className="fa-solid fa-star fs-6 text-warning m-0"></i>)
    }
    const addProductsToCart = (cartProductData) => {
        console.log(cartProductData)
        dispatch(addToCart(cartProductData))
    }

    const addProductsToFav = (FavProductData) => {
        console.log(FavProductData)
        dispatch(addToFav(FavProductData))
    }

    return (
        <div style={{ width: "370px" }}  className='my-3'>
            <MDBCard className='position-relative p-1 w-100'>
                <div className=''>
                    <i className={`${product.isClicked ? "fa-solid" : "fa-regular"} fa-heart onTop text-black`} onClick={() =>addProductsToFav({
                            id: product.id,
                            image: product.image,
                            title: product.title,
                            price: product.price,
                            quantity: 1,
                            isClicked:false,
                            category: product.category,
                            discount: product.discount,
                            rating: product.rating,
                            description: product.description,
                        })}></i>
                    {product.discount !== "0" ? <span className='bg-warning px-2 rounded text-white left'>-{product.discount}%</span> : ""}
                </div>
                <View productData={{
                    id: product.id,
                    image: product.image,
                    title: product.title,
                    price: product.price,
                    category: product.category,
                    discount: product.discount,
                    rating: product.rating,
                    description: product.description,
                }} />
                <MDBCardBody className='p-3'>
                    <MDBCardText className='text-danger fs-6 m-0'>
                        {product.category}
                    </MDBCardText>
                    <MDBCardTitle className='text-black my-2 fw-bold'>{product.title}</MDBCardTitle>
                    <div className='d-flex align-items-center'>
                        {stars.map((item) => item)}
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <MDBCardText className='text-black m-0'>
                            {product.discount !== "0" ? <div className='d-flex align-items-center gap-2'>
                                <span className='text-danger fs-5 fw-bold'>${product.price - Math.floor((product.discount * product.price) / 100)}</span>
                                <span className='old'>${product.price}</span>
                            </div> : <span>${product.price}</span>}
                        </MDBCardText>
                        <MDBBtn className='btn btn-black' onClick={() =>toast.success(<span className='fs-6'>{product.title} is added to the cart</span>)&  addProductsToCart({
                            id: product.id,
                            image: product.image,
                            title: product.title,
                            price: product.price,
                            quantity: 1,
                            category: product.category,
                            discount: product.discount,
                            rating: product.rating,
                            description: product.description,
                        })}>Add To Cart</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>
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
               theme='light'

            />
        </div>
    )
}
Product.propTypes = {
    product: PropTypes.any.isRequired
  }
export default Product