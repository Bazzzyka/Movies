import React from 'react';
import { connect } from 'react-redux';
import MovieCard, { IMovieData } from '../movieCard';
import MovieInfo from '../movieInfo';
import { loadMovies } from '../../redux/actions';
import styles from './list.module.scss';

class List extends React.Component<{ moviesData: IMovieData[], isVisible: boolean, dispatch: any }> {
  public componentDidMount() {
    this.props.dispatch(loadMovies());
  }

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

const mapDispatchToProps = (dispatch: any, props: any) => ({ 
  dispatch: dispatch
 });

export default connect(mapStateToProps, mapDispatchToProps)(List);
