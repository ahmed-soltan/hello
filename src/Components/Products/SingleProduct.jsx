import {

    MDBBtn
} from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToFav } from '../../Store/productsStore.jsx';

const SingleProduct = () => {
    const productData = useSelector(state => state.cart.searchedProduct)
    const dispatch = useDispatch()
    console.log(productData)

    const addProductsToCart = (cartProductData) => {
        console.log(cartProductData)
        dispatch(addToCart(cartProductData))
    }

    const addProductsToFav = (FavProductData) => {
        console.log(FavProductData)
        dispatch(addToFav(FavProductData))
    }

    return (
        <div className='my-5 d-flex align-content-center justify-content-center gap-5 flex-wrap'>
            {productData.title ?
                <>
                    <div>
                        <img src={productData.image} style={{ height: "500px" }} />
                    </div>
                    <div className='d-flex align-content-start justify-content-start flex-column gap-2'>
                        {<h1 className='display-3 text-black '>{productData.title}</h1>}
                      <div className='d-flex align-content-center justify-content-start'>
                            <h4>price : </h4>
                            {productData.discount !== "0" ? <div className='d-flex align-items-center gap-2'>
                                <span className='text-danger fs-5 fw-bold'>${productData.price - Math.floor((productData.discount * productData.price) / 100)}</span>
                                <span className='old'>${productData.price}</span>
                            </div> : <span>${productData.price}</span>}
                        </div>
                     <div className='d-flex align-content-center justify-content-start'>
                            <h4>rate : </h4>
                            <h4 className='ms-2 fw-bold'>{productData.rating} <i className='fa-solid fa-star fs-6 text-warning'></i></h4>
                        </div>
                          <div className='d-flex align-content-center justify-content-start'>
                            <h4>Description : </h4>
                            <h4 className='ms-2 fw-bold'>{productData.description} </h4>
                        </div>
                         <div className='d-flex align-content-center justify-content-start'>
                            <h4>Category : </h4>
                            <h4 className='ms-2 fw-bold text-warning'>{productData.category} </h4>
                        </div>
                       <div className='d-flex align-content-center justify-content-start'>
                            <h4>sale : </h4>
                            <h4 className='ms-2 fw-bold text-danger'>{productData.discount}% </h4>
                        </div>
                    <div className='d-flex align-items-start justify-content-start gap-3'>
                       <MDBBtn className='btn btn-black' onClick={() => toast.success(<span className='fs-6'>{productData.title} is added to the cart</span>) & addProductsToCart({
                            id: productData.id,
                            image: productData.image,
                            title: productData.title,
                            price: productData.price,
                            quantity: 1,
                            category: productData.category,
                            discount: productData.discount,
                            rating: productData.rating,
                            description: productData.description,
                        })}>Add To Cart</MDBBtn>
                        <MDBBtn className='btn btn-info' onClick={() => toast.success(<span className='fs-6'>{productData.title} is added to Favorite</span>) & addProductsToFav({
                            id: productData.id,
                            image: productData.image,
                            title: productData.title,
                            price: productData.price,
                            quantity: 1,
                            category: productData.category,
                            discount: productData.discount,
                            rating: productData.rating,
                            description: productData.description,
                        })}>Add To Favorite</MDBBtn>
                       </div>
                    </div></>:<h1 className='display-3 text-black '>Search Product</h1>}
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

export default SingleProduct