import { getImagesByQuery } from './js/pixabay-api.js';
import {
    clearGallery,
    createGallery,
    hideLoader,
    showLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
    form: document.querySelector('.form'),
    galleryList: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', e => {
    e.preventDefault();

    const searchText = e.target.elements.search.value.trim();

    if (!searchText) {
        iziToast.error({
            message: 'The input field is empty. Please enter your query !',
            position: 'topRight',
        });
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(searchText)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
            }
            return data.hits;
        })
        .then(hits => {
            createGallery(hits);
        })
        .catch(error => console.log(error))
        .finally(() => hideLoader());

    refs.form.reset();
});
