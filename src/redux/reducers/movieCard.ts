import { IMovieCard } from './types';
import { OPEN_CARD, CLOSE_CARD } from '../constants';

const init: IMovieCard = {
  id: 0,
  isVisible: false
};

export default (state: IMovieCard = init, action: any) => {
  let result = Object.assign({}, state);
  
  switch (action.type) {
    case OPEN_CARD:
      result.id = action.id;
      result.isVisible = true;
      return result;
    case CLOSE_CARD:
      result.id = action.id;
      result.isVisible = false;
      return result;
    default:
      return state;
  }
}
