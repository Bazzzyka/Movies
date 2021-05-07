import React from 'react';
import { connect } from 'react-redux';
import { IMovieData } from '../movieCard';
import MovieInfo from '../movieInfo';
import styles from './list.module.scss';

class List extends React.Component<{ moviesData: IMovieData[] }> {
  public render() {
    return (
      <div className={styles.list}>
        {this.props.moviesData.map(movieData => {
            return <div className={styles.listRow} key={movieData.id}>
              <MovieInfo movieData={movieData} />
            </div>
          })}
      </div>
    );
  }
}

const mapStateToProps = (state: any, props: any) => ({
  moviesData: state.movies
});

const mapDispatchToProps = (dispatch: any, props: any) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(List);
