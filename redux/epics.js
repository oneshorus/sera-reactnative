// Import dependencies
import {combineEpics, ofType} from 'redux-observable';
import {
  mergeMap,
  map,
  takeUntil,
  debounceTime,
  switchMap,
} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {
  API_HOST,
  API_KEY,
  API_SEARCH_HOST,
  FETCH_MOVIES_SEARCH,
  FETCH_MOVIES_SEARCH_DEBOUNCE_TIME,
  FETCH_MOVIES_SEARCH_CANCELLED,
  FETCH_MOVIES_NOWPLAYING,
  FETCH_MOVIES_POPULAR,
  FETCH_MOVIES_TOPRATED,
  FETCH_MOVIES_UPCOMING,
} from '../STATIC';
import {
  fetchMoviesSearchFulfilled,
  fetchMoviesNowPlayingFulfilled,
  fetchMoviesPopularFulfilled,
  fetchMoviesTopRatedFulfilled,
  fetchMoviesUpComingFulfilled,
} from './actions';

// epic
const fetchMoviesSearchEpic = action$ =>
  action$.pipe(
    ofType(FETCH_MOVIES_SEARCH),
    debounceTime(FETCH_MOVIES_SEARCH_DEBOUNCE_TIME),
    switchMap(payload =>
      ajax.getJSON(API_SEARCH_HOST + payload.payload).pipe(
        map(response => fetchMoviesSearchFulfilled({...response, ...payload})),
        takeUntil(action$.pipe(ofType(FETCH_MOVIES_SEARCH_CANCELLED))),
      ),
    ),
  );

const fetchMoviesNowPlayingEpic = action$ =>
  action$.pipe(
    ofType(FETCH_MOVIES_NOWPLAYING),
    mergeMap(payload =>
      ajax
        .getJSON(`${API_HOST + payload.payload}?api_key=${API_KEY}`)
        .pipe(map(response => fetchMoviesNowPlayingFulfilled(response))),
    ),
  );

const fetchMoviesPopularEpic = action$ =>
  action$.pipe(
    ofType(FETCH_MOVIES_POPULAR),
    mergeMap(payload =>
      ajax
        .getJSON(`${API_HOST + payload.payload}?api_key=${API_KEY}`)
        .pipe(map(response => fetchMoviesPopularFulfilled(response))),
    ),
  );

const fetchMoviesTopRatedEpic = action$ =>
  action$.pipe(
    ofType(FETCH_MOVIES_TOPRATED),
    mergeMap(payload =>
      ajax
        .getJSON(`${API_HOST + payload.payload}?api_key=${API_KEY}`)
        .pipe(map(response => fetchMoviesTopRatedFulfilled(response))),
    ),
  );

const fetchMoviesUpComingEpic = action$ =>
  action$.pipe(
    ofType(FETCH_MOVIES_UPCOMING),
    mergeMap(payload =>
      ajax
        .getJSON(`${API_HOST + payload.payload}?api_key=${API_KEY}`)
        .pipe(map(response => fetchMoviesUpComingFulfilled(response))),
    ),
  );

// Combine your epics
export const rootEpic = combineEpics(
  fetchMoviesSearchEpic,
  fetchMoviesNowPlayingEpic,
  fetchMoviesPopularEpic,
  fetchMoviesTopRatedEpic,
  fetchMoviesUpComingEpic,
);
