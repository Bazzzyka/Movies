import { IHiddenMovies } from "./types";
import { HIDE, SHOW } from '../constants';

const init: IHiddenMovies = {
  ids: new Set<number>()
};

export default (state: IHiddenMovies = init, action: any): IHiddenMovies => {
  let result = Object.assign({}, state);
  
  switch (action.type) {
    case HIDE:
      result.ids.add(action.id);
      return result;
    case SHOW:
      result.ids.delete(action.id);
      return result;
    default:
      return state;
  }
}
