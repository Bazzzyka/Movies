import { IMovieData } from '../../components/movieCard';
import { DATA } from '../../data';

export default (movies: IMovieData[] = DATA, action: any) => {
  const { type } = action;

  switch(type) {
    default: 
    return movies;
  }
};
