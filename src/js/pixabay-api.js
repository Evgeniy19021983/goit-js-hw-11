import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43290538-553335dd3499f06be9a5135a9';

export async function doFetch(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data.hits; // повертаємо тільки масив hits
  } catch (error) {
    throw new Error(error.response?.statusText || error.message);
  }
}
