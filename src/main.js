import { doFetch } from './js/pixabay-api';
import { renderGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  clearGallery();

  const query = event.currentTarget.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
      position: 'topCenter',
      timeout: 2000,
    });
    return;
  }

  showLoader();

  try {
    const images = await doFetch(query);

    if (images.length === 0) {
      iziToast.error({
        title: 'No results',
        message: 'No images found. Please try another query.',
        position: 'topCenter',
        timeout: 2000,
      });
      hideLoader();
      return;
    }

    renderGallery(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topCenter',
      timeout: 2000,
    });
  } finally {
    hideLoader();
  }
}
