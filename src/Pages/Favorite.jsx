import Product from '../Components/Products/Product'

import { useSelector } from 'react-redux'

import LatestNews from '../Components/LatestNews/LatestNews'
import { NavLink } from 'react-router-dom'
const ProductsData = () => {
  const Favorite = useSelector(state => state.cart.favProducts)
  return (
    <div className='px-3 my-5'>
      <div className='d-flex align-items-center justify-content-center'>
        {Favorite.length !== 0 ? <div>

          <div className='d-flex align-items-center justify-content-center'>
            <div className='row d-flex align-items-center justify-content-center'>
              {Favorite && Favorite.map((product) => (
                <Product product={product} id={product.id} key={product.id} />
              ))}
            </div>
          </div>
        </div> : <div>
          <h1>You Do not Have Favorite Products, Go And Add Some </h1>
          <NavLink to="/products" className="btn btn-black d-flex align-items-center justify-content-center py-3 my-4">Go Add Some Products</NavLink>
        </div>}
      </div>
      <LatestNews />
    </div>
  )
}

export default ProductsData