import React, { Component } from 'react';
import axios from 'axios';

const BASE_KEY = '40349433-607a0eca23d92c4a115fc3307';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    img: null
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

      this.setState({
        img: response.data.hits
      });
    } catch (error) {
      console.error('Mistake', error);
    }
  }

  render() {
    const { img } = this.state;

    return (
      <div>
        {img && (
          <div>
            {img.map(image => (
              <img key={image.id} src={image.previewURL} alt={image.tags} />
            ))}
          </div>
        )}
      </div>
    );
  }
}





