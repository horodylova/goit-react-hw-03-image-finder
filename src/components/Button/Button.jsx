import React from 'react';
import { ButtonStyle  } from './Button.styled'

export const Button = ({ onLoadMore, isLoading }) => {
  const handleClick = () => {
    if (!isLoading) {
      onLoadMore();
    }
  };

  return (
    <ButtonStyle
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      isLoading={isLoading}
    >
      {isLoading ? 'Loading...' : 'Load more...'}
    </ButtonStyle>
  );
};