import React from 'react';

export const Button = ({ currentPage, totalPages, onLoadMore }) => {
  return (
    currentPage < totalPages && (
      <button type="button" className='buttonLoad' onClick={onLoadMore}>
        Load more...
      </button>
    )
  );
};