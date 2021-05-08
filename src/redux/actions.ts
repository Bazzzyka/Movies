import { REMOVE_FROM_FAVORITE, ADD_TO_FAVORITE, OPEN_CARD, CLOSE_CARD } from './constants';

export const removeFromFavorite = (id: number) => ({ type: REMOVE_FROM_FAVORITE, id });
export const addToFavorite = (id: number) => ({ type: ADD_TO_FAVORITE, id });
export const openCard = (id: number) => ({ type: OPEN_CARD, id });
export const closeCard = (id: number) => ({ type: CLOSE_CARD, id });
