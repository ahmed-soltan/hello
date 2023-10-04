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
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import PropTypes from "prop-types";

export default function ViewProduct({ productData }) {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  return (

    <>
      <i className="fa-solid fa-eye text-info d-inline-block" onClick={toggleShow} ></i>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>product Id : {productData.id}</MDBModalTitle>
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
                  </MDBCardText>
                  <MDBCardText className='text-black fs-5'>
                    Description :{productData.description}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>

            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

ViewProduct.propTypes = {
  productData: PropTypes.any.isRequired
}