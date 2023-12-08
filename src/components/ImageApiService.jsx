const BASE_KEY = '40349433-607a0eca23d92c4a115fc3307';
const BASE_URL = 'https://pixabay.com/api/';

export const FetchImages = async (searchQuery, page) => {
  try {
    const response = await fetch(`${BASE_URL}?key=${BASE_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`);

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('Error fetching images');
  }
};




 
