import React, { Component } from 'react';
import axios from 'axios';

const BASE_KEY = '40349433-607a0eca23d92c4a115fc3307';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    this.performSearch('nature', 1);
  }

  async performSearch(searchQuery, currentPage) {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: BASE_KEY,
          q: searchQuery,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
          per_page: 12,
          page: currentPage,
        },
      });

      const imagesData = response.data.hits.map(image => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL
      }));

      this.setState({
        images: imagesData
      });
    } catch (error) {
      console.error('Mistake', error);
    }
  }

  render() {
    const { images } = this.state;

    return (
      <div>
        {images && (
          <div>
            {images.map(image => (
              <div key={image.id}>
                <img src={image.webformatURL} alt={`ID ${image.id}`} />               
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}





