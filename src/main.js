import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createMarkup } from './js/render-functions';
import { fetchImages } from './js/pixabay-api';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  const query = event.currentTarget.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please, enter a search query.',
      position: 'topCenter',
    });
    return;
  }

  loader.classList.remove('is-hidden');

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      iziToast.error({
        title: 'No Results',
        message: 'No images found. Try a different query.',
        position: 'topCenter',
      });
      return;
    }

    gallery.insertAdjacentHTML('beforeend', createMarkup(images));
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: 'Fetch Error',
      message: error.message,
      position: 'topCenter',
    });
  } finally {
    loader.classList.add('is-hidden');
    searchForm.reset();
  }
}
