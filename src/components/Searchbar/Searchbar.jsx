import React, { useState } from 'react';
import { SearchbarStyle, SearchButton, SearchFormButtonLabel, Input } from './Searchbar.styled';

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
      <SearchbarStyle onSubmit={handleSubmit}>
        <SearchButton type="submit" >
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchButton >

        <Input
          className="input"
          type="text"
          value={image}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
      </SearchbarStyle>
    </header>
  );
};

