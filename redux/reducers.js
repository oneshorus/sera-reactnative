import {combineReducers} from 'redux';

const initialState = {
  latest: [],
  nowPlaying: [],
  popular: [],
  topRated: [],
  upComing: [],
  latestLoading: false,
  nowPlayingLoading: false,
  popularLoading: false,
  topRatedLoading: false,
  upComingLoading: false,
};

const moviesReducer = (state = initialState, action) => {
  switch (action?.type) {
    case 'FETCH_MOVIES_LATEST':
      return {...state, latestLoading: true};
    case 'FETCH_MOVIES_NOWPLAYING':
      return {...state, nowPlayingLoading: true};
    case 'FETCH_MOVIES_POPULAR':
      return {...state, popularLoading: true};
    case 'FETCH_MOVIES_TOPRATED':
      return {...state, topRatedLoading: true};
    case 'FETCH_MOVIES_UPCOMING':
      return {...state, upComingLoading: true};
    case 'FETCH_MOVIES_LATEST_FULFILLED':
      return {...state, latest: action?.payload?.results, latestLoading: false};
    case 'FETCH_MOVIES_NOWPLAYING_FULFILLED':
      return {
        ...state,
        nowPlaying: action?.payload?.results,
        nowPlayingLoading: false,
      };
    case 'FETCH_MOVIES_POPULAR_FULFILLED':
      return {
        ...state,
        popular: action?.payload?.results,
        popularLoading: false,
      };
    case 'FETCH_MOVIES_TOPRATED_FULFILLED':
      return {
        ...state,
        topRated: action?.payload?.results,
        topRatedLoading: false,
      };
    case 'FETCH_MOVIES_UPCOMING_FULFILLED':
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