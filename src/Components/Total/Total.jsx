import {useState , useEffect , useContext} from 'react'
import { useSelector } from 'react-redux'
import { MDBBtn } from 'mdb-react-ui-kit'
import { AuthContext } from '../../Context/Auth';
import { ToastContainer , toast } from 'react-toastify';
const Total = () => {
   const CartProduct = useSelector((state) => state.cart.cartProducts)
   const { user } = useContext(AuthContext)

   const [totalAmount , setTotalAmount] = useState(0)
   const taxes = ((totalAmount * 5)/100)

   useEffect(()=>{
       let price =0
       CartProduct && CartProduct.map((item)=>{
         price += (item.price - Math.floor((item.discount * item.price) / 100))*item.quantity
         return price
       })
       setTotalAmount(price.toFixed(2))
     },[CartProduct])


     const checkout = () => {
      if(!user){
        toast.error(<span className='fs-6'>please login first</span>)
      }else{
        fetch("https://server-one-wheat-91.vercel.app/create-checkout-session", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        mode:"cors",
        body: JSON.stringify({
          items: CartProduct
        })
      })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({url})=>{
        window.location = url
      })
      .catch(e => {
        console.log(e.error)
      })
      }
    }
  
  
  return (
    <div className='p-2 d-flex align-items-start justify-content-start flex-column gap-3' style={{width:"400px"}}>
        <div className='d-flex align-items-center justify-content-between w-100'>
           <h3>sub Total</h3>
           <span className='fs-4'>${totalAmount}</span>
        </div>
        <div className='d-flex align-items-center justify-content-between w-100'>
           <h3>Taxes</h3>
           <span className='fs-4'>${taxes}</span>
        </div>
        <div className='d-flex align-items-center justify-content-between w-100'>
           <h3>Total</h3>
           <span className='fs-4'>$ { (Number(totalAmount) + Number(taxes)).toFixed(2) }</span>
        </div>
        {CartProduct.length!==0?    <MDBBtn className='btn btn-black' block onClick={checkout}>Check out</MDBBtn> : null}
     
        <ToastContainer
               position='top-left'
               autoClose={2000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               pauseOnHover
               draggable
               theme='dark'

            />
    </div>
  )
}

export default Total