import React from 'react';
import { connect } from 'react-redux';
import MovieInfo from '../movieInfo';
import { IMovieData } from '../movieCard';
import styles from '../list/list.module.scss';
import { favoriteMoviesDataSelector } from '../../redux/reducers/selectors';

class FavoriteMovies extends React.Component<{ moviesData: IMovieData[], isVisible: boolean }> {
  render() {
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
  moviesData: favoriteMoviesDataSelector(state)
});

const mapDispatchToProps = (dispatch: any, props: any) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovies);
