import React from 'react';

export const ImageGalleryItem = ({ image }) => (
  <li className="gallery-item">
    <img src={image.webformatURL} alt={`ID ${image.id}`} />
  </li>
);

 