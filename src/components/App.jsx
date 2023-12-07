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
    isLoading: false,
    page: 1,
    query: '',
    selectedImage: null,
    allImagesLoaded: true
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page || this.state.query !== prevState.query) {
      this.handleSearch();
    }
  }

  handleSearch = async () => {
    this.setState({ isLoading: true, error: null, allImagesLoaded: false });

    try {
      const newImages = await FetchImages(this.state.query, this.state.page, 12);

      this.setState((prevState) => ({
        images: [...prevState.images, ...newImages],
      
      }));
    } catch (error) {
      this.setState({
        error: error.message,
        allImagesLoaded: false, 
      });
    } finally {
      this.setState({ isLoading: false, allImagesLoaded: true });
    }
  };

  handleLoadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  handlePageChange = (newPage) => {
    this.setState({ page: newPage });
  };

  handleSearchbarSubmit = (query) => {
    this.setState({ query, page: 1, images: [] , allImagesLoaded: false}); 
  };

  handleImageSelect = (selectedImage) => {
    this.setState({ selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, page, isLoading, selectedImage, error, allImagesLoaded } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {isLoading && <MyLoader />}
        {error && <p>Error fetching images</p>}
        {images.length > 0 && (
          <>
            <ImageGallery images={images} onSelect={this.handleImageSelect} />
            {allImagesLoaded && <Button currentPage={page} onLoadMore={this.handleLoadMore} isLoading={isLoading} />}
          </>
        )}
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





