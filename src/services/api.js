import axios from 'axios';

const API_KEY = '7c0c458e245909c66f3397c50f32766a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrending () {
    const response = await axios.get('trending/all/day?language=en-US', {
        params: {
            api_key: API_KEY,
        },
    })
    return response.data.results;
}

export async function fetchSearchMovies (inputText) {
    const response = await axios.get('search/movie?include_adult=false&language=en-US&page=1', {
        params: {
            api_key: API_KEY,
            query: inputText,
        },
    })
    return response.data.results;
}

export async function fetchMovieDetails (movieId) {
    const response = await axios.get(`movie/${movieId}?language=en-US`, {
        params: {
            api_key: API_KEY,
        },
    })
    return response.data;
}

export async function fetchMovieCredits (movieId) {
    const response = await axios.get(`movie/${movieId}/credits?language=en-US`, {
        params: {
            api_key: API_KEY,
        },
    })
    return response.data;
}

export async function fetchMovieReviews (movieId) {
    const response = await axios.get(`movie/${movieId}/reviews?language=en-US&page=1'`, {
        params: {
            api_key: API_KEY,
        },
    })
    return response.data;
}
















