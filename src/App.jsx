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
                <Route path='/' exact element={<Home />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/signup' exact element={<Signup />} />
                <Route path='/products' exact element={<ProductsData />} />
                <Route path='/cart' exact element={<Cart />} />
                <Route path='/favorite' exact element={<Favorite />} />
                <Route exact element={<PrivateRoutes />}>

                  <Route path='/dashboard' exact element={<Dashboard />} />
                </Route>
                <Route path='/contact' exact element={<Contact />} />
                <Route path='/blog' exact element={<Blog />} />

                <Route path='/cancel' exact element={<Cancel />} />
                <Route path='/success' exact element={<Success />} />
                <Route path='/singleproduct' exact element={<SingleProduct />} />
                <Route path='/categoryselect' exact element={<CategorySelect />} />
                <Route path='*' exact element={<NotFound />} />
              </Routes>
            </div>
            <Footer /></>}
      </BrowserRouter>
    </div>

  )
}

export default App