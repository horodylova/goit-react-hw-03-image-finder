import React from 'react';
import { Audio } from 'react-loader-spinner';

export const MyLoader = () => {
  return (
    <>
      <Audio
        height={80}
        width={80}
        radius={9}
        color="green"
        ariaLabel="loading"
        className="custom-loader-wrapper"
      />
      <p>Loading...</p>
    </>
  );
};


 