import { combineReducers } from 'redux';
import moviesReducer from './movies';
import favoriteMoviesReducer from './favoriteMovies';
import cardReducer from './movieCard';

export default combineReducers({
  movies: moviesReducer,
  favoriteMovies: favoriteMoviesReducer,
  movieCard: cardReducer
});