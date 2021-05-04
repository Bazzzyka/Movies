import React from 'react';
import { IMovieData } from '../movieCard';
import MovieInfo from '../movieInfo';
import styles from './list.module.scss';

class List extends React.Component<{ moviesData: IMovieData[] }> {
  public render() {
    return (
      <div className={styles.list}>
        {this.props.moviesData.map(movieData => {
            return <MovieInfo key={movieData.id} movieData={movieData} />
          })}
      </div>
    );
  }
}

export default List;
