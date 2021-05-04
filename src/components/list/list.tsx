import React from 'react';
import { IMovieData } from '../movieCard';
import MovieInfo from '../movieInfo';
import styles from './list.module.scss';

class List extends React.Component<{ moviesData: IMovieData[] }> {
  public render() {
    return (
      <div className={styles.list}>
        {this.props.moviesData.map(movieData => {
            return <div className={styles.listRow}>
              <MovieInfo key={movieData.id} movieData={movieData} />
            </div>
          })}
        {this.props.moviesData.map(movieData => {
            return <div className={styles.listRow}>
            <MovieInfo key={movieData.id} movieData={movieData} />
          </div>
          })}
        {this.props.moviesData.map(movieData => {
            return <div className={styles.listRow}>
            <MovieInfo key={movieData.id} movieData={movieData} />
          </div>
          })}
        {this.props.moviesData.map(movieData => {
            return <div className={styles.listRow}>
            <MovieInfo key={movieData.id} movieData={movieData} />
          </div>
          })}
        {this.props.moviesData.map(movieData => {
            return <div className={styles.listRow}>
            <MovieInfo key={movieData.id} movieData={movieData} />
          </div>
          })}
        {this.props.moviesData.map(movieData => {
            return <div className={styles.listRow}>
            <MovieInfo key={movieData.id} movieData={movieData} />
          </div>
          })}
        {this.props.moviesData.map(movieData => {
            return <div className={styles.listRow}>
            <MovieInfo key={movieData.id} movieData={movieData} />
          </div>
          })}
      </div>
    );
  }
}

export default List;
