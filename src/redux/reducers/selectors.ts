import { createSelector } from 'reselect';
import { IMovieData } from '../../components/movieCard';

const moviesSelector = (state: any) => state.movies;
const favoriteMoviesSelector = (state: any) => state.favoriteMovies;

export const favoriteMoviesDataSelector = createSelector(
  [moviesSelector,
  favoriteMoviesSelector], 
  (movies: IMovieData[], favoriteMovies: { ids: Set<number> }) => {
    let result: IMovieData[];
    let favoriteMoviesIds: number[] = Array.from(favoriteMovies.ids);

    //TO FIX: id === 0 doesn't work
    result = movies.filter((item: IMovieData) => { 
      return favoriteMoviesIds.find((id: number) => {
        // debugger
        return item.id === id;
      })
    });
    
    return result;
});
