import { IFavoriteMovies } from "./types";
import { REMOVE_FROM_FAVORITE, ADD_TO_FAVORITE } from '../constants';

const init: IFavoriteMovies = {
  ids: new Set<number>()
};

export default (state: IFavoriteMovies = init, action: any): IFavoriteMovies => {
  let result = Object.assign({}, state);
  
  switch (action.type) {
    case ADD_TO_FAVORITE:
      result.ids.add(action.id);
      return result;
    case REMOVE_FROM_FAVORITE:
      result.ids.delete(action.id);
      return result;
    default:
      return state;
  }
}
