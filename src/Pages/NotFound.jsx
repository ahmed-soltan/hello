import {NavLink} from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column my-5'>
      <h1 className='text-danger display-4'>404 NOT FOUND</h1>
      <div className='d-flex align-items-center justify-content-center bg-danger' style={{width:"120px" , height:"120px" , borderRadius:"50%"}}>
      <i className="fa-solid fa-x text-white" style={{fontSize:"80px"}}></i>
      </div>
      <NavLink to="/" className="fs-4 mt-5 btn btn-dark">Back to Home</NavLink>
    </div>
  )
}

export default NotFound