import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import Blog1 from '../../assets/images/blog-1.jpg'
import usingPhone from '../../assets/images/pexels-polina-tankilevitch-7382447.jpg'
import businessMan from '../../assets/images/business man.jpg'
import usingSmartWatch from '../../assets/images/pexels-energepiccom-110471.jpg'
export default function LatestNews() {
    return (
        <div style={{ padding: "30px" }}>
            <h3 className='text-black text-left fw-bold my-4'>Our Latest News</h3>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-12 my-2'>
                    <MDBCard>
                        <MDBCardImage style={{ height: "300px" }} src={Blog1} position='top' loading="lazy" alt='...' />
                        <MDBCardBody>
                            <MDBCardText>
                                11 June , 2023
                            </MDBCardText>
                            <MDBCardTitle className='fw-bold text-black'>A Beautiful Sunday Morning Renaissance</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the cards content.
                            </MDBCardText>
                            <MDBBtn className='btn btn-black rounded'>Read More</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <MDBCard>
                        <MDBCardImage style={{ height: "300px" }} src={usingSmartWatch} position='top' loading="lazy" alt='...' />
                        <MDBCardBody>
                            <MDBCardText>
                                11 June , 2023
                            </MDBCardText>
                            <MDBCardTitle className='fw-bold text-black'>A Beautiful Sunday Morning Renaissance</MDBCardTitle>
                            <MDBCardText>

                                Some quick example text to build on the card title and make up the bulk of the card content.
                            </MDBCardText>
                            <MDBBtn className='btn btn-black rounded'>Read More</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <MDBCard>
                        <MDBCardImage style={{ height: "300px" }} src={businessMan} position='top' loading="lazy" alt='...' />
                        <MDBCardBody>
                            <MDBCardText>
                                11 June , 2023
                            </MDBCardText>
                            <MDBCardTitle className='fw-bold text-black'>A Beautiful Sunday Morning Renaissance</MDBCardTitle>
                            <MDBCardText>

                                Some quick example text to build on the card title and make up the bulk of the card content.
                            </MDBCardText>
                            <MDBBtn className='btn btn-black rounded'>Read More</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <MDBCard>
                        <MDBCardImage style={{ height: "300px" }} src={usingPhone} position='top' loading="lazy" alt='...' />
                        <MDBCardBody>
                            <MDBCardText>
                                11 June , 2023
                            </MDBCardText>
                            <MDBCardTitle className='fw-bold text-black'>A Beautiful Sunday Morning Renaissance</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card content.
                            </MDBCardText>
                            <MDBBtn className='btn btn-black rounded'>Read More</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </div>
    );
}