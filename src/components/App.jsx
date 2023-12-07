import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { FetchImages } from './ImageApiService';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { MyLoader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
    query: '',
    selectedImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if ((this.state.page !== prevState.page || this.state.query !== prevState.query) && this.state.status !== 'loading') {
      this.handleSearch();
    }
  }

  handleSearch = async () => {
    try {
      this.setState({ status: 'loading' });

      const images = await FetchImages(this.state.query, this.state.page, 12);
      console.log('Received images:', images);
      this.setState({
        images,
        status: 'success',
      });
    } catch (error) {
      this.setState({
        error: error.message,
        status: 'error'
      });
    }
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), this.handleSearch);
  };

  handlePageChange = (newPage) => {
    this.setState({ page: newPage });
  };

  handleSearchbarSubmit = (query) => {
    this.setState({ query, page: 1 });
  };

  handleImageSelect = (selectedImage) => {
    this.setState({ selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, status, page, totalPages, selectedImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />

        {(() => {
          if (status === 'loading') {
            return <MyLoader/>;
          } else if (status === 'success') {
            return (
              <>
                <ImageGallery images={images} onSelect={this.handleImageSelect} />
                <Button currentPage={page} totalPages={totalPages} onLoadMore={this.handleLoadMore} />
              </>
            );
          } else if (status === 'error') {
            return <p>Error fetching images</p>;
          } else {
            return null;
          }
        })()}

        {selectedImage && <Modal image={selectedImage} onClose={this.handleCloseModal} />}
      </div>
    );
  }
}




// import axios from 'axios';

// const BASE_KEY = '40349433-607a0eca23d92c4a115fc3307';
// const BASE_URL = 'https://pixabay.com/api/';

// export class App extends Component {
//   state = {
//     images: [],
//     loading: false
//   }

//   componentDidMount() {
//     this.performSearch('nature', 1);
//     this.setState({loading: true});
//   }

//   async performSearch(searchQuery, currentPage) {
//     try {
//       const response = await axios.get(BASE_URL, {
//         params: {
//           key: BASE_KEY,
//           q: searchQuery,
//           image_type: 'photo',
//           orientation: 'horizontal',
//           safesearch: 'true',
//           per_page: 12,
//           page: currentPage,
//         },
//       });

//       const imagesData = response.data.hits.map(image => ({
//         id: image.id,
//         webformatURL: image.webformatURL,
//         largeImageURL: image.largeImageURL
//       }));

//       this.setState({
//         images: imagesData,
//         loading: false 
//       });
//     } catch (error) {
//       console.error('Mistake', error);
//     }
//   }

//   render() {
//     const { images } = this.state;

//     return (
//       <div>
//         {this.state.loading && <h2>Loading...</h2>}
//         {images && (
//           <div>
//             {images.map(image => (
//               <div key={image.id}>
//                 <img src={image.webformatURL} alt={`ID ${image.id}`} />               
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// }





