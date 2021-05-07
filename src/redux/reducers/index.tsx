import { combineReducers } from 'redux';
import moviesReducer from './movies';
import favoriteMoviesReducer from './favoriteMovies';

export default combineReducers({
  movies: moviesReducer,
  favoriteMovies: favoriteMoviesReducer
});