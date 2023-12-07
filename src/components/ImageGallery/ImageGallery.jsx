import React from 'react';

export const ImageGallery = ({ images, onSelect }) => {
  const handleImageClick = (selectedImage) => {
    onSelect(selectedImage);
  };

  return (
    <ul className="image-gallery">
      {images.map(image => (
        <li
          key={image.id}
          className="image-gallery-item"
          onClick={() => handleImageClick(image)}
        >
          <img src={image.webformatURL} alt={`ID ${image.id}`} />
        </li>
      ))}
    </ul>
  );
};


  