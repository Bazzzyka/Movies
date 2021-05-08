import { createSelector } from 'reselect';
import { IMovieData } from '../../components/movieCard';

const moviesSelector = (state: any) => state.movies;
const favoriteMoviesSelector = (state: any) => state.favoriteMovies;
const movieCard = (state: any): IMovieData => state.movieCard;

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

export const cardSelector = createSelector(
  [moviesSelector,
  movieCard],
  (movies: IMovieData[], movieCard: IMovieData) => {
    let result: IMovieData = {
      id: 0,
      title: '',
      year: 0,
      rating: 0,
      genres: [],
      description: '',
      coverImageSrc: ''
    };

    let index = movies.findIndex((item: IMovieData) => item.id === movieCard.id);

    if (index !== -1) {
      result = movies[index];
    }

    return result;
  }
);
