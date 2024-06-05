import Product from '../Components/Products/Product';
import Filter from '../Components/Products/Filter';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ProductPage.module.css';
import FilterByPrice from '../Components/Products/FilterByPrice';
import FilterByRating from '../Components/Products/FilterByRating';
import LatestNews from '../Components/LatestNews/LatestNews';
import FilterBySearch from '../Components/Products/FilterBySearch';
import Pagination from "../Components/Products/Pagination.jsx";

const ProductsData = () => {
  const filteredProducts = useSelector((state) => state.cart.filteredProducts);
  const [showBasic, setShowBasic] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
   useEffect(()=>{
    setShowBasic(false)
   },[])
   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);
   const show = () =>{
      setShowBasic(false)
   }
  return (
    <div >
      <div className={styles.container}>
        <i className='fa-solid fa-bars fs-3 text-black open' onClick={()=>setShowBasic(showBasic ? !showBasic : true)}></i>
        <div className={styles.Filter}>
          <Filter  />
          <FilterByPrice />
          <FilterByRating />
        </div>
        <div className={showBasic ? styles.showFilter : styles.hideFilter}>
          <Filter show={show} />
          <FilterByPrice show={show} />
          <FilterByRating show={show} />
        </div>
        <div style={{width:"100%"}}>
          <div className='row d-flex align-items-center justify-content-center search ms-2 my-3' style={{width:"100%"}} >
            <FilterBySearch />
          </div>
          <div className={styles.products} style={{width:"100%"}}>
            <div className='row  ' style={{minWidth:"100%"}}>
              {currentPosts && currentPosts.length > 0 ? (
                currentPosts.map((product) => (
                  <Product product={product} key={product.id} />
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </div>
            <Pagination
                totalPosts={filteredProducts.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                productsPosts={setPostsPerPage}
            />
        </div>
      </div>
      <LatestNews />
    </div>
  );
};


export default ProductsData;