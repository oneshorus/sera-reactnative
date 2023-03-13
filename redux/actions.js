import {
  FETCH_MOVIES_LATEST,
  FETCH_MOVIES_LATEST_FULFILLED,
  FETCH_MOVIES_NOWPLAYING,
  FETCH_MOVIES_NOWPLAYING_FULFILLED,
  FETCH_MOVIES_POPULAR,
  FETCH_MOVIES_POPULAR_FULFILLED,
  FETCH_MOVIES_TOPRATED,
  FETCH_MOVIES_TOPRATED_FULFILLED,
  FETCH_MOVIES_UPCOMING,
  FETCH_MOVIES_UPCOMING_FULFILLED,
} from '../STATIC';

// action creators
export const fetchMoviesLatest = () => ({
  type: FETCH_MOVIES_LATEST,
  payload: 'latest',
});
export const fetchMoviesLatestFulfilled = payload => ({
  type: FETCH_MOVIES_LATEST_FULFILLED,
  payload,
});

export const fetchMoviesNowPlaying = () => ({
  type: FETCH_MOVIES_NOWPLAYING,
  payload: 'now_playing',
});
export const fetchMoviesNowPlayingFulfilled = payload => ({
  type: FETCH_MOVIES_NOWPLAYING_FULFILLED,
  payload,
});

export const fetchMoviesPopular = () => ({
  type: FETCH_MOVIES_POPULAR,
  payload: 'popular',
});
export const fetchMoviesPopularFulfilled = payload => ({
  type: FETCH_MOVIES_POPULAR_FULFILLED,
  payload,
});

export const fetchMoviesTopRated = () => ({
  type: FETCH_MOVIES_TOPRATED,
  payload: 'top_rated',
});
export const fetchMoviesTopRatedFulfilled = payload => ({
  type: FETCH_MOVIES_TOPRATED_FULFILLED,
  payload,
});

export const fetchMoviesUpComing = () => ({
  type: FETCH_MOVIES_UPCOMING,
  payload: 'upcoming',
});
export const fetchMoviesUpComingFulfilled = payload => ({
  type: FETCH_MOVIES_UPCOMING_FULFILLED,
  payload,
});
