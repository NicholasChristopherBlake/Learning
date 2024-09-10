import React from "react";
import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  let pagesArray = usePagination(totalPages);

  return (
    <div className="page__wrapper">
      {pagesArray.map((page) => (
        <p
          className={page === currentPage ? "page page__active" : "page"}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
