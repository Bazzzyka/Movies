import { combineReducers } from 'redux';
import hiddenMoviesReducer from './hiddenMovies';

export default combineReducers({
  hiddenMovies: hiddenMoviesReducer
});