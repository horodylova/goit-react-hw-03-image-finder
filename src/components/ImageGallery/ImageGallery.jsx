import React from 'react';

export class ImageGallery extends React.Component {
    render() {
      const { images } = this.props;
  
      return (
        <ul className="image-gallery">
          {images && images.map(image => (
            <li key={image.id} className="image-gallery-item">
              <img src={image.webformatURL} alt={`ID ${image.id}`} />
            </li>
          ))}
        </ul>
      );
    }
  }
  