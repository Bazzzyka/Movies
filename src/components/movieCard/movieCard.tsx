import React from 'react';

export interface IMovieData {
  id: number;
  title: string;
  year: number;
  rating: number;
  genres: string[];
  description: string;
  language: string;
  coverImageSrc: string;
}

class MovieCard extends React.Component<{ movieData: IMovieData }> {
  public render() {
    return (
      <div>Movie card</div>
    );
  }
}

export default MovieCard;
