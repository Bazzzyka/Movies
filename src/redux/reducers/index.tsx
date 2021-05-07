import { combineReducers } from 'redux';
import moviesReducer from './movies';
import hiddenMoviesReducer from './favoriteMovies';

export default combineReducers({
  movies: moviesReducer,
  hiddenMovies: hiddenMoviesReducer
});