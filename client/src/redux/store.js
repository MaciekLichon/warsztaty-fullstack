import initialState from './initialState';
import { createStore, combineReducers } from 'redux';

import postsReducer from './postsRedux';
import searchStringReducer from './searchStringRedux';

const subreducers = {
  posts: postsReducer,
  searchString: searchStringReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
