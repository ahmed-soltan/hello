import { useState } from 'react';
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
import { storage } from '../../firebase/firebase.jsx'
import UseFireStore from '../../firebase/UseFireStore.jsx';

const initialState = {title : '' , price:'' , category:'' , description:'' , discount:'' , rating:''}
const DashBoardAddProduct = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [input , setInput] = useState(initialState)
  const {addProduct} = UseFireStore()
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
  const handleInputs=({target})=>{
     setInput({
      ...input,
      [target.name]:target.value
     })
  }

  const handleSubmit = async(e) =>{
     e.preventDefault()
     addProduct(input)
     setInput(initialState)
     setBasicModal(!basicModal)
  }

  return (
    <div className=''>
      <MDBBtn onClick={toggleShow} className='btn btn-success mt-3'><span>Add Product </span></MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Product</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label>Image</label>
                  <input type='file' className='form-control' name="image" onChange={uploadImage} />
                </div>
                <div className='mb-3'>
                  <label>Title</label>
                  <input type='text' className='form-control' name="title" value={input.title} onChange={handleInputs} />
                </div>
                <div className='mb-3'>
                  <label>Price</label>
                  <input type='number' className='form-control' name="price" value={input.price}  onChange={handleInputs}/>
                </div>
                <div className='mb-3'>
                  <label>Category</label>
                  <input type='text' className='form-control' name="category" value={input.category} onChange={handleInputs} />
                </div>
                <div className='mb-3'>
                  <label>Discount</label>
                  <input type='number' className='form-control' name="discount" value={input.discount} onChange={handleInputs} />
                </div>
                <div className='mb-3'>
                  <label>Rating</label>
                  <input type='number' className='form-control' name="rating" value={input.rating} onChange={handleInputs} max="5" />
                </div>
                <div className='mb-3'>
                  <label>Description</label>
                  <textarea className='form-control' name="description" value={input.description} onChange={handleInputs} />
                </div>


                <MDBBtn type='submit' className='mb-4 btn btn-black' block>
                  Add Product
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

export default DashBoardAddProduct