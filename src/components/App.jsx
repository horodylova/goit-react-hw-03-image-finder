import React from 'react';

import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Searchbar/>
    </div>
  );
};

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





