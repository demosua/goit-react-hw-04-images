import axios from "axios";

const API_KEY_PIXABAY = "34930678-f4d511ae74090860518da87d0";


async function getImages(query, page) {
    try {
      const response = await axios.get(`/?key=${API_KEY_PIXABAY}&q=${query}&image_type=photo&safesearch=true&orientation=horizontal&per_page=12&page=${page}`, {
            baseURL: 'https://pixabay.com/api',
            transformResponse: [function (tempResponse) {
                const images = JSON.parse(tempResponse).hits;
                return images.map(({id, webformatURL, largeImageURL}) => ({id, webformatURL, largeImageURL}));
            }],
      });

      if (response.data.length > 0) {
        return response.data;
      }

      return Promise.reject(new Error(`There are no results with query: ${query}`));

    } catch (error) {
      return error;
    }
}

const api = {
  getImages,
};

export default api;