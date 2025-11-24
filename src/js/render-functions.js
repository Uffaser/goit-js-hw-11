import { refs } from '../main';

export function createGallery(images) {
    return images
        .map(
            image =>
                `<li class="gallery-item">
            <a href="${image.webformatURL}">
            <img class="gallery-image" src="${image.largeImageURL}" alt="${image.tags}">
            </a>
            <div class="gallery-desc-box">
                <p class="gallery-desc-title">Likes
                    <span class="gallery-desc">${image.likes}</span></p>
                <p class="gallery-desc-title">Views
                    <span class="gallery-desc">${image.views}</span></p>
                <p class="gallery-desc-title">Comments
                    <span class="gallery-desc">${image.comments}</span></p>
                <p class="gallery-desc-title">Downloads
                    <span class="gallery-desc">${image.downloads}</span></p>
            </div>
        </li>`
        )
        .join('');
}

export function clearGallery() {
    refs.galleryList.innerHTML = '';
}

export function showLoader() {
    refs.loader.classList.remove('visible');
}

export function hideLoader() {
    refs.loader.classList.add('visible');
}
