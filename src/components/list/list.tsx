import React from 'react';
import { connect } from 'react-redux';
import MovieCard, { IMovieData } from '../movieCard';
import MovieInfo from '../movieInfo';
import styles from './list.module.scss';

class List extends React.Component<{ moviesData: IMovieData[], isVisible: boolean }> {
  public render() {
    return (
      <div className={styles.list} data-visible={this.props.isVisible}>
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
