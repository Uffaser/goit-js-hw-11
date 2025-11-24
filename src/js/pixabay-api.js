import axios from 'axios';

export function getImagesByQuery(query) {
    return axios.get('https://pixabay.com/api/', {
        params: {
            key: '53361036-d6c3e8b24991f3de089666c85',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    });
}
