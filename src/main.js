import searchImage from './js/pixabay-api';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import createGallery from './js/render-functions';
import { clearGallery } from './js/render-functions';
const button = document.querySelector('.submit-button');
const inputLine = document.querySelector('.search-input');
const inputForm = document.querySelector('.input-form');
const inputLoader = document.querySelector('.loader');
inputForm.addEventListener('submit', implementSubmit);

function implementSubmit(event) {
  clearGallery();
  event.preventDefault();
  inputLoader.classList.remove('hidden');
  let queryWord = inputLine.value.trim();
  searchImage(`${queryWord}`)
    .then(data => {
      if (queryWord === '') {
        iziToast.error({
          position: 'topRight',
          message: 'Please fill the input',
        });
        inputLoader.classList.add('hidden');
        return;
      } else if (data.total == 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        inputLoader.classList.add('hidden');
        return;
      } else createGallery(data);
      inputLoader.classList.add('hidden');
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: `${error}`,
      });
    });
}
