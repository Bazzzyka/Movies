import { REMOVE_FROM_FAVORITE, ADD_TO_FAVORITE } from './constants';

export const removeFromFavorite = (id: number) => ({ type: REMOVE_FROM_FAVORITE, id });
export const addToFavorite = (id: number) => ({ type: ADD_TO_FAVORITE, id });