const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43290538-553335dd3499f06be9a5135a9';

export async function doFetch(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const response = await fetch(`${BASE_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();

  return data.hits; // Возвращаем только массив с изображениями
}
