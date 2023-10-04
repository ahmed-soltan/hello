import{ useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { storage } from '../../firebase/firebase';
import UseFireStore from '../../firebase/UseFireStore';
import PropTypes from "prop-types";

export default function EditProduct({ productData }) {
    const initialState = {title: productData.title, price: productData.price, category: productData.category, description: productData.description, discount: productData.discount, rating: productData.rating }
    const [basicModal, setBasicModal] = useState(false);
    const [input, setInput] = useState(initialState);
    const { updateProduct } = UseFireStore()
    const toggleShow = () => setBasicModal(!basicModal);
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const storageRef = storage.ref(file.name);

        try {
            const snapshot = await storageRef.put(file);
            const url = await snapshot.ref.getDownloadURL();

            setInput((prevProduct) => ({
                ...prevProduct,
                image: url // Update the image URL in the product state
            }));
        } catch (err) {
            console.log(err);
        }
    };
    const handleInputs = ({ target }) => {
        setInput({
            ...input,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        updateProduct(productData.id, input)
        setInput(initialState)
        setBasicModal(!basicModal)
    }
    return (
        <div className='my-4'>
            <i className="fa-solid fa-pen text-warning w-100 d-inline-block" onClick={toggleShow} ></i>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Edit Product</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label>Image</label>
                                    <input type='file' className='form-control' name="image" onChange={uploadImage} />                                </div>
                                <div className='mb-3'>
                                    <label>Title</label>
                                    <input type='text' className='form-control' name="title" defaultValue={input.title} onChange={handleInputs} />
                                </div>
                                <div className='mb-3'>
                                    <label>Price</label>
                                    <input type='number' className='form-control' name="price" defaultValue={input.price} onChange={handleInputs} />
                                </div>
                                <div className='mb-3'>
                                    <label>Category</label>
                                    <input type='text' className='form-control' name="category" defaultValue={input.category} onChange={handleInputs} />
                                </div>
                                <div className='mb-3'>
                                    <label>Discount</label>
                                    <input type='number' className='form-control' name="discount" defaultValue={input.discount} onChange={handleInputs} />
                                </div>
                                <div className='mb-3'>
                                    <label>Rating</label>
                                    <input type='text' className='form-control' name="rating" defaultValue={input.rating} onChange={handleInputs} max="5" />
                                </div>
                                <div className='mb-3'>
                                    <label>Description</label>
                                    <textarea className='form-control' name="description" defaultValue={input.description} onChange={handleInputs} />
                                </div>


                                <MDBBtn type='submit' className='mb-4 btn btn-black' block>
                                    Edit Product
                                </MDBBtn>
                            </form>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='dark' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
}

EditProduct.propTypes = {
    productData: PropTypes.any.isRequired
  }