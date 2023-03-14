import {combineReducers} from 'redux';

import {
  FETCH_MOVIES_SEARCH,
  FETCH_MOVIES_SEARCH_FULFILLED,
  FETCH_MOVIES_SEARCH_CANCELLED,
  FETCH_MOVIES_NOWPLAYING,
  FETCH_MOVIES_NOWPLAYING_FULFILLED,
  FETCH_MOVIES_POPULAR,
  FETCH_MOVIES_POPULAR_FULFILLED,
  FETCH_MOVIES_TOPRATED,
  FETCH_MOVIES_TOPRATED_FULFILLED,
  FETCH_MOVIES_UPCOMING,
  FETCH_MOVIES_UPCOMING_FULFILLED,
} from '../STATIC';

const initialState = {
  search: [],
  searchWords: '',
  nowPlaying: [],
  popular: [],
  topRated: [],
  upComing: [],
  searchLoading: false,
  nowPlayingLoading: false,
  popularLoading: false,
  topRatedLoading: false,
  upComingLoading: false,
};

const moviesReducer = (state = initialState, action) => {
  switch (action?.type) {
    case FETCH_MOVIES_SEARCH:
      return {...state, searchLoading: true};
    case FETCH_MOVIES_NOWPLAYING:
      return {...state, nowPlayingLoading: true};
    case FETCH_MOVIES_POPULAR:
      return {...state, popularLoading: true};
    case FETCH_MOVIES_TOPRATED:
      return {...state, topRatedLoading: true};
    case FETCH_MOVIES_UPCOMING:
      return {...state, upComingLoading: true};
    case FETCH_MOVIES_SEARCH_FULFILLED:
      return {
        ...state,
        searchLoading: false,
        search: action?.payload?.results,
        searchWords: action?.payload?.payload,
      };
    case FETCH_MOVIES_SEARCH_CANCELLED:
      return {...state, searchLoading: false};
    case FETCH_MOVIES_NOWPLAYING_FULFILLED:
      return {
        ...state,
        nowPlaying: action?.payload?.results,
        nowPlayingLoading: false,
      };
    case FETCH_MOVIES_POPULAR_FULFILLED:
      return {
        ...state,
        popular: action?.payload?.results,
        popularLoading: false,
      };
    case FETCH_MOVIES_TOPRATED_FULFILLED:
      return {
        ...state,
        topRated: action?.payload?.results,
        topRatedLoading: false,
      };
    case FETCH_MOVIES_UPCOMING_FULFILLED:
      return {
        ...state,
        upComing: action?.payload?.results,
        upComingLoading: false,
      };
    default:
      return state;
  }
};

// Combine your reducers
export const rootReducer = combineReducers({
  movies: moviesReducer,
});
