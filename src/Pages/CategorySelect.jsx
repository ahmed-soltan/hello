import  { useState } from 'react'
import { useSelector } from 'react-redux'
import Product from '../Components/Products/Product'
import styles from './ProductPage.module.css';
import Pagination from "../Components/Products/Pagination.jsx";

const CategorySelect = () => {
    const filteredProducts = useSelector((state) => state.cart.filteredProducts);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);
    return (
        <div className='my-5 mx-3'>
            <div className={styles.products}>
                <div className='row d-flex align-items-center justify-content-lg-start justify-content-sm-center'>
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
                productPosts={setPostsPerPage}
            /></div>
    )
}

export default CategorySelect