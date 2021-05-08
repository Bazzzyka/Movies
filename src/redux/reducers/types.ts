import { IMovieData } from "../../components/movieCard";

export interface IFavoriteMovies {
  ids: Set<number>;
}

export interface IMovieCard {
  id: number;
  isVisible: boolean;
}
