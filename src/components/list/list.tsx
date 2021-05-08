import React from 'react';
import { connect } from 'react-redux';
import MovieCard, { IMovieData } from '../movieCard';
import MovieInfo from '../movieInfo';
import styles from './list.module.scss';

const initMovieCardData: IMovieData = {
  id: 0,
  title: '',
  year: 0,
  rating: 0,
  genres: [],
  cast: [],
  director: '',
  producer: '',
  description: '',
  coverImageSrc: ''
};

class List extends React.Component<{ moviesData: IMovieData[], isVisible: boolean }> {
  public render() {
    return (
      <div className={styles.list} data-visible={this.props.isVisible}>
        {this.props.moviesData.map(movieData => {
            return <div className={styles.listRow} key={movieData.id}>
              <MovieInfo movieData={movieData} />
            </div>
          })}
        <MovieCard movieData={initMovieCardData} isVisible={false} closeCard={null} />
      </div>
    );
  }
}

const mapStateToProps = (state: any, props: any) => ({
  moviesData: state.movies
});

const mapDispatchToProps = (dispatch: any, props: any) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(List);
