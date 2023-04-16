import React from 'react';
import Paginate from 'react-paginate';
import './pagination.css';

const Pagination = ({range, data, onPageChanged}) => {

  const getPageCount = () => {
    return Math.ceil(data.length/range);
  };

  const onPageSelect = (value) => {
    onPageChanged(value.selected);
  };

  return (
    <div className='pagination-list'>
      <Paginate
        breakLabel='...'
        nextLabel='Next'
        onPageChange={onPageSelect}
        pageRangeDisplayed={3}
        pageCount={getPageCount()}
        previousLabel='Previous'
        renderOnZeroPageCount={null}
       />
    </div>
  );
};

export default Pagination;