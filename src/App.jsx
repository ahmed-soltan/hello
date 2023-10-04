import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ProductsData from './Pages/Products'
import Cart from './Pages/Cart'
import Favorite from './Pages/Favorite'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Dashboard from './Pages/Dashboard/Dashboard'
import Footer from './Components/Footer/Footer'
import Cancel from './Pages/Cancel'
import Success from './Pages/Success'
import { ClockLoader } from "react-spinners";
import SingleProduct from './Components/Products/SingleProduct.jsx'
import CategorySelect from './Pages/CategorySelect'
import NotFound from './Pages/NotFound';
import PrivateRoutes from './Components/PrivateRoute/PrivateRoute'
const App = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <div>
      <BrowserRouter>
        {loading ?

          <div className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh", minWidth: "100vw", backgroundColor: "rgb(5, 33, 46)" }}>
            <ClockLoader color="rgba(54, 215, 183, 1)" />
          </div> : <>
            <Header />
            <div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/products' element={<ProductsData />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/favorite' element={<Favorite />} />
                <Route element={<PrivateRoutes />}>

                  <Route path='/dashboard' element={<Dashboard />} />
                </Route>
                <Route path='/contact' element={<Contact />} />
                <Route path='/blog' element={<Blog />} />

                <Route path='/cancel' element={<Cancel />} />
                <Route path='/success' element={<Success />} />
                <Route path='/singleproduct' element={<SingleProduct />} />
                <Route path='/categoryselect' element={<CategorySelect />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
            <Footer /></>}
      </BrowserRouter>
    </div>

  )
}

export default App