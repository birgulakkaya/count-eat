import PropTypes from "prop-types";

const Pagination = ({
  customPagination,
  totalPage,
  nextPage,
  changePage,
  previousPage,
  foods,
  currentPage,
  rowsLimit,
}) => {
  return (
    <div className="w-full  flex justify-center  flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
      <div className="text-lg">
        {foods?.length} Adet Besinden{" "}
        {currentPage === 0 ? 1 : currentPage * rowsLimit + 1} ile{" "}
        {currentPage === totalPage - 1
          ? foods?.length
          : (currentPage + 1) * rowsLimit}{" "}
        arasındakiler gösteriliyor.
      </div>
      <div className="flex">
        <ul
          className="flex justify-center items-center gap-x-[10px] z-30"
          role="navigation"
          aria-label="Pagination"
        >
          <li
            className={`prev-btn flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${
              currentPage === 0
                ? "bg-[#cccccc] pointer-events-none"
                : "cursor-pointer"
            }`}
            onClick={previousPage}
          >
            <img
              src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg"
              alt="Previous"
            />
          </li>
          {customPagination?.slice(0, 5).map((data, index) => (
            <li
              className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px] border-[1px] border-solid bg-[#FFFFFF] cursor-pointer ${
                currentPage === index
                  ? "text-blue-600 border-sky-500"
                  : "border-[#E4E4EB]"
              }`}
              onClick={() => changePage(index)}
              key={index}
            >
              {index + 1}
            </li>
          ))}
          <li
            className={`next-btn flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${
              currentPage === totalPage - 1
                ? "bg-[#cccccc] pointer-events-none"
                : "cursor-pointer"
            }`}
            onClick={nextPage}
          >
            <img
              src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg"
              alt="Next"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  customPagination: PropTypes.array,
  totalPage: PropTypes.number,
  nextPage: PropTypes.func,
  changePage: PropTypes.func,
  previousPage: PropTypes.func,
  foods: PropTypes.array,
  currentPage: PropTypes.number,
  rowsLimit: PropTypes.number,
};
