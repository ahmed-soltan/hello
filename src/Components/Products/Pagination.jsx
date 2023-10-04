import "./Pagination.css";
import PropTypes from "prop-types";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const next = () => {
    // Check if there is a next page
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    // Check if there is a previous page
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={prev}>{"<<"}</button>
      {pages.map((page, index) => (
        <div key={index}>
          <button
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        </div>
      ))}
      <button onClick={next}>{">>"}</button>
    </div>
  );
};

Pagination.propTypes = {
  totalPosts: PropTypes.any.isRequired,
  postsPerPage: PropTypes.any.isRequired,
  setCurrentPage: PropTypes.any.isRequired,
  currentPage: PropTypes.any.isRequired,
};
export default Pagination;
