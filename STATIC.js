export const API_KEY = 'a24fe1f8fec773de6f37cab69744a736';
export const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjRmZTFmOGZlYzc3M2RlNmYzN2NhYjY5NzQ0YTczNiIsInN1YiI6IjY0MGU3YjJlODQ4ZWI5MDA4MGUyOTBmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ooYPFi2uRyDK56AnL5BtOpeIFxB2QbAbJ2ZROdxVsDo';

export const IMG_HOST = 'https://image.tmdb.org/t/p/w200/';
export const BACKDROP_HOST = 'https://image.tmdb.org/t/p/w500/';
export const API_HOST = 'https://api.themoviedb.org/3/movie/';
export const API_SEARCH_HOST = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

export const FETCH_MOVIES_SEARCH = 'FETCH_MOVIES_SEARCH';
export const FETCH_MOVIES_SEARCH_FULFILLED = 'FETCH_MOVIES_SEARCH_FULFILLED';
export const FETCH_MOVIES_SEARCH_CANCELLED = 'FETCH_MOVIES_SEARCH_CANCELLED';
export const FETCH_MOVIES_SEARCH_DEBOUNCE_TIME = 1000;

export const FETCH_MOVIES_NOWPLAYING = 'FETCH_MOVIES_NOWPLAYING';
export const FETCH_MOVIES_NOWPLAYING_FULFILLED =
  'FETCH_MOVIES_NOWPLAYING_FULFILLED';

export const FETCH_MOVIES_POPULAR = 'FETCH_MOVIES_POPULAR';
export const FETCH_MOVIES_POPULAR_FULFILLED = 'FETCH_MOVIES_POPULAR_FULFILLED';

export const FETCH_MOVIES_TOPRATED = 'FETCH_MOVIES_TOPRATED';
export const FETCH_MOVIES_TOPRATED_FULFILLED =
  'FETCH_MOVIES_TOPRATED_FULFILLED';

export const FETCH_MOVIES_UPCOMING = 'FETCH_MOVIES_UPCOMING';
export const FETCH_MOVIES_UPCOMING_FULFILLED =
  'FETCH_MOVIES_UPCOMING_FULFILLED';
