import loadMovies from './middlware/api';
import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const enhancer = applyMiddleware(loadMovies);

export default createStore(reducer, applyMiddleware(loadMovies));
