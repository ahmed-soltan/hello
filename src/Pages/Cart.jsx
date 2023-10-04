import CartProducts from '../Components/CartProducts/CartProducts'
import Total from '../Components/Total/Total'
const Cart = () => {
  
  return (
    <div className='' style={{backgroundColor:"e9e9e9"}}>
      <h1 className='text-black text-center mt-5'>Shopping Cart</h1>
     <div className='d-flex align-items-center justify-content-around flex-wrap'>
     <CartProducts/>
      <Total/>
     </div>
    </div>
  )
}

export default Cart