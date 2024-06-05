import { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import PropTypes from "prop-types";

import { useDispatch } from 'react-redux'
import { addToCart } from '../../Store/productsStore.jsx';
import { ToastContainer, toast } from 'react-toastify';

export default function View({ productData }) {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    const dispatch = useDispatch()
    const addProductsToCart = (cartProductData) => {
        console.log(cartProductData)
        dispatch(addToCart(cartProductData))
    }

    return (

        <>
            <MDBCardImage src={productData.image} loading="lazy" style={{ height: "350px", cursor: "pointer" }} position='top' alt={productData.title} onClick={toggleShow} />
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>

                            <MDBCard>
                                <MDBCardImage src={productData.image} style={{ height: "300px" }} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardTitle className='text-black fs-4'>Title :{productData.title}</MDBCardTitle>
                                    <MDBCardText className='text-black fs-5'>
                                        Price :${productData.price}
                                    </MDBCardText>
                                    <MDBCardText className='text-black fs-5'>
                                        Category :{productData.category}
                                    </MDBCardText>
                                    <MDBCardText className='text-black fs-5'>
                                        Discount :{productData.discount}
                                    </MDBCardText>
                                    <MDBCardText className='text-black fs-5'>
                                        Rating :{productData.rating}
                                        <i className='fa-solid fa-star fs-6 ms-2'></i>
                                    </MDBCardText>
                                    <MDBCardText className='text-black fs-5'>
                                        Description :{productData.description}
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBModalBody>

                        <MDBModalFooter>
                        <MDBBtn className='btn btn-black' onClick={() => addProductsToCart({
                            id: productData.id,
                            image: productData.image,
                            title: productData.title,
                            price: productData.price,
                            quantity: 1,
                            category: productData.category,
                            discount: productData.discount,
                            rating: productData.rating,
                            description: productData.description,
                        }) & toast.success(<span className='fs-6'>{productData.title} is added to the cart</span>)}>Add To Cart</MDBBtn>
                            <MDBBtn color='primary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
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
        </>
    );
}

View.propTypes = {
    productData: PropTypes.any.isRequired
  }