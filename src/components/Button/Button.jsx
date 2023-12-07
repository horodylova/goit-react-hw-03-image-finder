import React from 'react';

export const Button = ({ onLoadMore }) => {
  const handleLoadMoreClick = (e) => {
    e.preventDefault();  

    onLoadMore(); 
  };

  return (
   
      <button type="button" className="buttonLoad" onClick={handleLoadMoreClick}>
        Load more...
      </button>
  
  );
};