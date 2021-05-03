import React from 'react';
import MovieCard, { IMovieData } from '../movieCard';

class List extends React.Component<{ moviesData: IMovieData[] }> {
  public render() {
    return (
      <table>
        <thead>
          {this.props.moviesData.map(movieData => {
            return <MovieCard movieData={movieData} />
          })}
        </thead>
      </table>
    );
  }
}

export default List;
