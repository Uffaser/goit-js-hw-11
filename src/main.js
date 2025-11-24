import { getImagesByQuery } from './js/pixabay-api.js';
import {
    clearGallery,
    createGallery,
    hideLoader,
    showLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
    form: document.querySelector('.form'),
    galleryList: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', e => {
    e.preventDefault();

    const searchText = e.target.elements.search.value;

    clearGallery();
    showLoader();

    getImagesByQuery(searchText)
        .then(response => {
            if (response.data.hits.length === 0) {
                iziToast.error({
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
            }
            return response.data.hits;
        })
        .then(hits => {
            refs.galleryList.innerHTML = createGallery(hits);

            const gallery = new SimpleLightbox('.gallery-item a');
            gallery.options.captionsData = 'alt';
            gallery.refresh();
        })
        .catch(error => console.log(error))
        .finally(() => hideLoader());

    refs.form.reset();
});
