import './header.css'
import PropTypes from "prop-types";

const DashboardHeader = ({products , messages }) => {
    return (
       <div className='container'>
         <div className='d-flex align-items-center gap-3 py-3 row  ' >
            <div className='text-black data-container border-5 col-lg-3 col-sm-12' style={{backgroundColor:"rgb(161, 209, 161)"}}>
                <i className="fa-solid fa-store fs-1"></i>
                <h1>{products.length}</h1>
                <h3>Products</h3>
            </div>
            <div className='text-black data-container border-5 col-lg-3 col-sm-12' style={{backgroundColor:"rgb(61, 209, 231)"}}>
                <i className="fa-solid fa-envelope fs-1"></i>
                <h1>{messages.length}</h1>
                <h3>Messages</h3>
            </div>
        </div >
       </div>
    )
}

DashboardHeader.propTypes = {
    products: PropTypes.any.isRequired,
    messages: PropTypes.any.isRequired
  }
export default DashboardHeader