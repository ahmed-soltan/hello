import UseFireStore from '../../firebase/UseFireStore'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';
import './style.css'
import View from './View';
import { useDispatch } from 'react-redux'
import { addToCart, addToFav } from '../../Store/productsStore.jsx';
import { ToastContainer, toast } from 'react-toastify';

const FeaturedProducts = () => {
    const { products } = UseFireStore()
    const featureProduct = products.slice(0, 4)
    const dispatch = useDispatch()

    const addProductsToCart = (cartProductData) => {
        console.log(cartProductData)
        dispatch(addToCart(cartProductData))
    }
    const addProductsToFav = (FavProductData) => {
        console.log(FavProductData)
        dispatch(addToFav(FavProductData))
    }
    return (
        <div className='my-5' style={{ padding: "30px" }}>
            <h3 className='text-black text-left fw-bold my-4'>Featured Products</h3>
            <div className='row'>
                {featureProduct.map(product => (

                    <div className='col-lg-3 col-md-6 col-sm-12 my-2' key={product.id}>
                        <MDBCard className='position-relative p-1'>
                            <div className=''>
                                <i className={`${product.isClicked ? "fa-solid" : "fa-regular"} fa-heart onTop text-black`} onClick={() => addProductsToFav({
                                    id: product.id,
                                    image: product.image,
                                    title: product.title,
                                    price: product.price,
                                    quantity: 1,
                                    category: product.category,
                                    discount: product.discount,
                                    rating: product.rating,
                                    description: product.description,
                                }) & toast.success(<span className='fs-6'>{product.title} is added to Favorite</span>)}></i>
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
                                <MDBCardTitle className='text-black mt-2 mb-4 fw-bold'>{product.title}</MDBCardTitle>
                                <div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <MDBCardText className='text-black m-0'>
                                        {product.discount !== "0" ? <div className='d-flex align-items-center gap-2'>
                                            <span className='text-danger fs-5 fw-bold'>${product.price - Math.floor((product.discount * product.price) / 100)}</span>
                                            <span className='old'>${product.price}</span>
                                        </div> : <span>${product.price}</span>}
                                    </MDBCardText>
                                    <MDBBtn className='btn btn-black' onClick={() => addProductsToCart({
                                        id: product.id,
                                        image: product.image,
                                        title: product.title,
                                        price: product.price,
                                        quantity: 1,
                                        category: product.category,
                                        discount: product.discount,
                                        rating: product.rating,
                                        description: product.description,
                                    }) & toast.success(<span className='fs-6'>{product.title} is added to the cart</span>)}>Add To Cart</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                ))}
            </div>
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

export default FeaturedProducts