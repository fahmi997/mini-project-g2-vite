import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, data, itemsPerPage }) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {currentPage > 1 && <button onClick={prevPage}>Previous</button>}
      {indexOfLastItem < data.length && <button onClick={nextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
