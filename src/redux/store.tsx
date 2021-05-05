import { createStore } from 'redux';
// import { IHiddenMovies } from "./reducers/types";
import reducers from './reducers';

export default createStore(reducers);