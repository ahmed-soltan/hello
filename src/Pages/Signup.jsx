import { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { auth } from '../firebase/firebase';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const initialState = {displayName:'', email: '', password: "", confirmPassword: '' }
const Signup = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState(initialState)
  const [errorMessage, setErrorMessage] = useState("")
  const handleInput = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value
    })
  }
  const handleSubmit = async(e) =>{
      e.preventDefault()
      if(input.password !== input.confirmPassword){
        setErrorMessage("The password Does not Match")
        console.log(errorMessage)
        return 0;
      }
      try {
        await auth.createUserWithEmailAndPassword(input.email, input.password)
        setInput(initialState)
        navigate('/');
      } catch (error) {
        setErrorMessage("the email already exist")
        console.log(errorMessage)
      }
      
  }
  return (
    <div className='container mt-5 d-flex align-items-center justify-content-center gap-5 flex-wrap pb-4'>
      <div className='d-flex align-items-start justify-content-center flex-column' style={{ width: "500px" }}>
        <h1>Register to Hinamori Store To Get All Offers </h1>
        <p className='w-100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quia. Maiores facere laborum voluptates vitae quas doloribus cum, officiis, dolore provident ratione suscipit deleniti.</p>
        <p className='w-100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quia. Maiores facere laborum voluptates vitae quas doloribus cum, officiis, dolore provident ratione suscipit deleniti.</p>

      </div>
      <form className='' style={{ width: "500px" }} onSubmit={handleSubmit}>
        <div className='mb-3'>
          <span className='text-danger'>{errorMessage ? errorMessage : null}</span>
        </div>
        <div className='mb-3'>
          <label>User Name</label>
          <MDBInput className='mb-4' type='text' value={input.displayName ? input.displayName : ""}  autoComplete='off' name='displayName' onChange={handleInput} />
        </div>
        <div className='mb-3'>
          <label>Email Address</label>
          <MDBInput className='mb-4' type='email' value={input.email}  autoComplete='off' name='email' onChange={handleInput} />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <MDBInput className='mb-4' type='password' value={input.password}  autoComplete='off' name='password' onChange={handleInput} />
        </div>
        <div>
          <label>Confirm Password</label>
          <MDBInput className='mb-4' type='password' value={input.confirmPassword}  autoComplete='off' name='confirmPassword' onChange={handleInput} />
        </div>

        <MDBRow className='mb-2 w-100'>
          <MDBCol>
            <p className='w-100'>Have an Account ?  <NavLink to="/login" className="another">Sign in Now</NavLink> </p>

          </MDBCol>
        </MDBRow>

        <MDBBtn type='submit' block style={{ backgroundColor: "rgb(32, 61, 75)", color: "white", boxShadow: "0 0 0 0 !important" }}>
         Register
        </MDBBtn>
      </form>
    </div>
  );
}

export default Signup