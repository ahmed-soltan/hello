import { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import DashBoardAddProduct from '../DashboardAddProduct/DashBoardAddProduct';
import UseFireStore from '../../firebase/UseFireStore';
import ViewProduct from '../viewProducts/ViewProducts.jsx';
import EditProduct from '../EditProduct/EditProduct';
import SearchFilter from '../SearchFilter/SearchFilter';
import CategoryFilter from '../CategorySearch/CategorySearch';
import { useSelector } from 'react-redux'
import Pagination from "../Products/Pagination.jsx";

const DashboardProducts = () => {
  const { DeleteProduct } = UseFireStore();
  const filteredProducts = useSelector(state => state.cart.filteredProducts)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);


  return (
    <div className='container'>
      <DashBoardAddProduct />
      <div className='d-flex align-items-center justify-content-start'>
        <SearchFilter />
        <CategoryFilter />
      </div>
      <MDBTable align='middle' responsive>
        <MDBTableHead style={{backgroundColor:"rgb(32, 61, 75)" , color:"white"}}>
          <tr >
            <th scope='col'>Image</th>
            <th scope='col'>Title</th>
            <th scope='col'>Price</th>
            <th scope='col'>Category</th>
            <th scope='col'>Discount</th>
            <th scope='col'>Rating</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {currentPosts &&
            currentPosts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className='d-flex align-items-center'>
                    <img src={product.image} alt={product.title} style={{ width: '55px', height: '55px' }} />
                  </div>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{product.title}</p>
                </td>
                <td>
                  <p className='fw-normal mb-1'>${product.price}</p>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{product.category}</p>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{product.discount}%</p>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{product.rating}</p>
                </td>
                <td className='d-flex align-items-center justify-content-around'>
                  <ViewProduct
                    productData={{
                      id: product.id,
                      image: product.image,
                      title: product.title,
                      price: product.price,
                      category: product.category,
                      discount: product.discount,
                      rating: product.rating,
                      description: product.description,
                    }}
                  />
                  <EditProduct
                    productData={{
                      id: product.id,
                      image: product.image,
                      title: product.title,
                      price: product.price,
                      category: product.category,
                      discount: product.discount,
                      rating: product.rating,
                      description: product.description,
                    }}
                  />
                  <i className='fa-solid fa-trash text-danger m-0 d-inline-block' onClick={() => DeleteProduct(product.id)}></i>
                </td>
              </tr>
            ))}
        </MDBTableBody>
      </MDBTable>
      <Pagination
                totalPosts={filteredProducts.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                posts={setPostsPerPage}
            />
    </div>
  )
}

export default DashboardProducts;