// import { Reducer } from "redux";
import { IHiddenMovies } from "./types";
import { HIDE, SHOW } from '../constants';

const init: IHiddenMovies = {
  ids: []
};

export default (state: IHiddenMovies = init, action: any): IHiddenMovies => {
  let result = Object.assign({}, state);
  
  switch (action.type) {
    case HIDE:
      result.ids.push(action.payload);
      return result;
    case SHOW:
      let index = result.ids.indexOf(action.payload);

      result.ids.splice(index, 1);
      return result;
    default:
      return state;
  }
}
