// Import dependencies
import {combineEpics, ofType} from 'redux-observable';
import {mergeMap, map} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {
  API_HOST,
  API_KEY,
  FETCH_MOVIES_LATEST,
  FETCH_MOVIES_NOWPLAYING,
  FETCH_MOVIES_POPULAR,
  FETCH_MOVIES_TOPRATED,
  FETCH_MOVIES_UPCOMING,
} from '../STATIC';
import {
  fetchMoviesLatestFulfilled,
  fetchMoviesNowPlayingFulfilled,
  fetchMoviesPopularFulfilled,
  fetchMoviesTopRatedFulfilled,
  fetchMoviesUpComingFulfilled,
} from './actions';


// epic
const fetchMoviesLatestEpic = action$ =>
  action$.pipe(
    ofType(FETCH_MOVIES_LATEST),
    mergeMap(payload =>
      ajax
        .getJSON(
          `${API_HOST + payload.payload}?api_key=${API_KEY}&language=en-US`,
        )
        .pipe(map(response => fetchMoviesLatestFulfilled(response))),
    ),
  );

const fetchMoviesNowPlayingEpic = action$ =>
  action$.pipe(
    ofType(FETCH_MOVIES_NOWPLAYING),
    mergeMap(payload =>
      ajax
        .getJSON(
          `${API_HOST + payload.payload}?api_key=${API_KEY}&language=en-US`,
        )
        .pipe(map(response => fetchMoviesNowPlayingFulfilled(response))),
    ),
  );

const fetchMoviesPopularEpic = action$ =>
  action$.pipe(
    ofType(FETCH_MOVIES_POPULAR),
    mergeMap(payload =>
      ajax
        .getJSON(
          `${API_HOST + payload.payload}?api_key=${API_KEY}&language=en-US`,
        )
        .pipe(map(response => fetchMoviesPopularFulfilled(response))),
    ),
  );

const fetchMoviesTopRatedEpic = action$ =>
  action$.pipe(
    ofType(FETCH_MOVIES_TOPRATED),
    mergeMap(payload =>
      ajax
        .getJSON(
          `${API_HOST + payload.payload}?api_key=${API_KEY}&language=en-US`,
        )
        .pipe(map(response => fetchMoviesTopRatedFulfilled(response))),
    ),
  );

const fetchMoviesUpComingEpic = action$ =>
  action$.pipe(
    ofType(FETCH_MOVIES_UPCOMING),
    mergeMap(payload =>
      ajax
        .getJSON(
          `${API_HOST + payload.payload}?api_key=${API_KEY}&language=en-US`,
        )
        .pipe(map(response => fetchMoviesUpComingFulfilled(response))),
    ),
  );

// Combine your epics
export const rootEpic = combineEpics(
  fetchMoviesLatestEpic,
  fetchMoviesNowPlayingEpic,
  fetchMoviesPopularEpic,
  fetchMoviesTopRatedEpic,
  fetchMoviesUpComingEpic,
);
