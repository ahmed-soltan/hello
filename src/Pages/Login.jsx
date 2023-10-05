import  { useEffect, useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import googleLogo from '../assets/images/Google.jpeg'
import { auth , provider } from '../firebase/firebase';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const initialState = {email :'' , password: ""}
const Login = () => {
  const navigate = useNavigate();

  const [input ,setInput] = useState(initialState)
  const [errorMessage, setErrorMessage] = useState("")
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // The user is signed in, redirect them to the home page
        navigate("/");
      }
      })
      return unsubscribe
  },[navigate])
  const handleInput=({target})=>{
     setInput({
      ...input,
      [target.name]:target.value
     })
     console.log(input)
  }
  const handleClick = async () => {
    await auth.signInWithPopup(provider);
  };
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(input.email, input.password);
      console.log(input)
      setInput(initialState)
    } catch (error) {
      setErrorMessage("invalid email or password")
      console.log(errorMessage)
    }   
}

  return (
    <div className='container mt-5 d-flex align-items-center justify-content-center gap-5 flex-wrap pb-4'>
      <div className='d-flex align-items-lg-start align-items-sm-start justify-content-center flex-column' style={{ width: "500px" }}>
        <h1>Sign in Hinamori Store To Get All Offers </h1>
        <p className='w-100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quia. Maiores facere laborum voluptates vitae quas doloribus cum, officiis, dolore provident ratione suscipit deleniti.</p>
        <p className='w-100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quia. Maiores facere laborum voluptates vitae quas doloribus cum, officiis, dolore provident ratione suscipit deleniti.</p>

      </div>
      <form className='' style={{ width: "500px" }} onSubmit={handleSubmit}>
        {errorMessage ? <p className='text-danger'>{errorMessage}</p> : null}
        <div className='mb-3'>
          <label>Email Address</label>
          <MDBInput className='mb-4' type='email' autoComplete='off' value={input.email} name='email' onChange={handleInput} />
        </div>
        <div>
          <label>Password</label>
          <MDBInput className='mb-4' type='password' autoComplete='off' value={input.password} name='password' onChange={handleInput} />
        </div>

        <MDBRow className='mb-2'>
          <MDBCol>
            <p className='w-100'>Do not Have an Account ?  <NavLink to="/signup" className="another">Create New Account</NavLink> </p>

          </MDBCol>
        </MDBRow>

        <MDBBtn type='submit' block style={{ backgroundColor: "rgb(32, 61, 75)" , color:"white" , boxShadow:"0 0 0 0 !important" }}>
          Sign in
        </MDBBtn>

        <div className='d-flex align-items-start justify-content-center my-3' >
          
          <span className='or'>or</span>
        </div>

        <div onClick={handleClick} className='d-flex align-items-start justify-content-center gap-4 py-2' style={{border:"1px solid #555" , borderRadius:"30px" , cursor:"pointer"}} >
           <img src={googleLogo} alt='Sign in With Google' style={{width:"35px"}}/>
           <span className='pt-1'>Sign in With Google</span>
        </div>



      </form>
    </div>
  );
}

export default Login