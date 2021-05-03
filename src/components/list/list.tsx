import React from 'react';
import { IMovieData } from '../movieCard';
import MovieInfo from '../movieInfo';

class List extends React.Component<{ moviesData: IMovieData[] }> {
  public render() {
    return (
      <table>
        <thead>
          {this.props.moviesData.map(movieData => {
            return <MovieInfo movieData={movieData} />
          })}
        </thead>
      </table>
    );
  }
}

export default List;
