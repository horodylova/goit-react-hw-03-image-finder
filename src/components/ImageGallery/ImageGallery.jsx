import React from 'react';
import { ImageGalleryStyle, ImageGalleryItemStyle } from './ImageGallery.styled';

export const ImageGallery = ({ images, onSelect }) => {
  return (
    <ImageGalleryStyle>
      {images.map((image) => (
        <ImageGalleryItemStyle key={image.id} onClick={() => onSelect(image)}>
          <img src={image.webformatURL} alt={`ID ${image.id}`} />
        </ImageGalleryItemStyle>
      ))}
    </ImageGalleryStyle>
  );
};



  