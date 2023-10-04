import {NavLink} from 'react-router-dom'
const Success = () => {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column my-5'>
      <h1 className='text-success display-2'>Payment Successful</h1>
      <h1 className='text-warning fw-bold mb-5'>Your order in Our System</h1>
      <div className='d-flex align-items-center justify-content-center bg-success' style={{width:"150px" , height:"150px" , borderRadius:"50%"}}>
      <i className="fa-solid fa-check text-white" style={{fontSize:"80px"}}></i>
      </div>
      <NavLink to="/" className="fs-4 mt-5 btn btn-dark">Back to Home</NavLink>
    </div>
  )
}

export default Success