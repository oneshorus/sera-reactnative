import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import {rootReducer} from './reducers';
import {rootEpic} from './epics';

// Create the epic middleware
const epicMiddleware = createEpicMiddleware();

// Define the middleware to be applied to the store
const middleware = [epicMiddleware];

// Configure the store
const configureStore = () => {
  // Create the store with the rootReducer and middleware
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
    ),
  );

  // Run the rootEpic
  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;