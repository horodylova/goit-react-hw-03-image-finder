import React, { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [image, setImage] = useState('');

  const handleNameChange = (e) => {
    setImage(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(image);
    setImage('');
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          value={image}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

