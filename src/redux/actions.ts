import { REMOVE_FROM_FAVORITE, ADD_TO_FAVORITE, OPEN_CARD, CLOSE_CARD, LOAD_MOVIES } from './constants';

export const removeFromFavorite = (id: number) => ({ type: REMOVE_FROM_FAVORITE, id });
export const addToFavorite = (id: number) => ({ type: ADD_TO_FAVORITE, id });
export const openCard = (id: number) => ({ type: OPEN_CARD, id });
export const closeCard = (id: number) => ({ type: CLOSE_CARD, id });
export const loadMovies = () => ({
  type: LOAD_MOVIES,
  callAPI: 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies',
  requestOptions: {
    "method": "GET",
	  "headers": {
      "x-rapidapi-key": "f89ec78088msh3620820a1e395a3p13f6fejsndfa8870d6cdc",
      "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
  }
});
