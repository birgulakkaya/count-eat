import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ onPageChange, currentPage, totalBlogs, pageSize }) => {
  const totalPages = Math.ceil(totalBlogs / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activerPagination" : ""}
          key={pageNumber}
        >
          <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
        </li>
      )
    );
  };

  return (
    <ul className="pagination my-8 flex-warp gap-6">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Önceki
        </button>
      </li>
      <div className="flex gap-1">{renderPaginationLinks()}</div>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Sonraki
        </button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalBlogs: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  selectedCategory: PropTypes.string,
};

export default Pagination;
