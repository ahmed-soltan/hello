import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  const date = new Date();
  const getYear=date.getFullYear()
  return (
    <MDBFooter
      style={{ backgroundColor: "rgb(5, 33, 46)", color: "#fff" }}
      className="text-center text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-lg-between flex-wrap p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span className="text-white">
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <a href="" className="me-4 text-reset text-white">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset text-white">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset text-white">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset text-white">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset text-white">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset text-white">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5 text-white">
          <MDBRow className="mt-3 text-white d-flex flex-wrap">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4 text-white">
              <h6 className=" w-100 text-center text-uppercase fw-bold mb-4 text-white">
                <MDBIcon icon="gem" className="me-3 fs-5" />
                Hinamori Store
              </h6>
              <p className="w-100 text-center" >
                lorem ipsum dolor sit amet, consectetur adip non pro id pro et
                dolor in id pro et dolor in
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className=" w-100 text-center text-uppercase fw-bold mb-4">Information</h6>
              <p className="w-100 text-center">
                <a href="#!" className="text-reset text-white">
                  Privacy Policy
                </a>
              </p>
              <p className="w-100 text-center">
                <a href="#!" className="text-reset text-white">
                  Refund Policy
                </a>
              </p>
              <p className="w-100 text-center">
                <a href="#!" className="text-reset text-white">
                  Shipping Policy
                </a>
              </p>
              <p className="w-100 text-center">
                <a href="#!" className="text-reset text-white">
                  Terms of service
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className=" w-100 text-center text-uppercase fw-bold mb-4">Useful links</h6>
              <p className="w-100 text-center">
                <a href="#!" className="text-reset text-white">
                  Pricing
                </a>
              </p>
              <p className="w-100 text-center">
                <a href="#!" className="text-reset text-white">
                  Settings
                </a>
              </p>
              <p className="w-100 text-center">
                <a href="#!" className="text-reset text-white">
                  Orders
                </a>
              </p>
              <p className="w-100 text-center">
                <a href="#!" className="text-reset text-white">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className=" w-100 text-center text-uppercase fw-bold mb-4">Contact</h6>
              <p className="w-100 text-center">
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p className="w-100 text-center">
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p className="w-100 text-center">
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p className="w-100 text-center">
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <span className="fs-5">
          @
        {getYear}
        </span>
        <a
          className="ms-3 text-reset text-white fw-bold fs-4"
        >
          copyrights Gamal{" "}
        </a>
      </div>
    </MDBFooter>
  );
}
