import React from 'react';
import { connect } from 'react-redux';
import { IMovieData } from '../movieCard';
import { removeFromFavorite, addToFavorite } from '../../redux/actions';
import { ReactComponent as Star } from '../../icons/star.svg';
import styles from './movieInfo.module.scss';
import commonStyles from '../components.module.scss';

class MovieInfo extends React.Component<{ movieData: IMovieData, isFavorite: boolean, removeFromFavorite: any, addToFavorite: any }> {
  public render() {
    const { id, title, year, rating, genres, description, coverImageSrc } = this.props.movieData;

    return (
      <div className={commonStyles.row}>
        <img src={coverImageSrc} className={styles.img} />
        <div className={`${commonStyles.column} ${styles.infoContainer}`}>
          <div className={`${styles.headerRow} ${commonStyles.row}`}>
            <h2>{title} ({year})</h2>
            <div>IMDB rating: {rating}</div>
          </div>
          <div className={`${commonStyles.row} ${styles.subHeaderRow}`}>
            <div>{genres.join(', ')}</div>
            <Star className={styles.iconVisibility}
              data-favorite={this.props.isFavorite.toString()} 
              onClick={this.props.isFavorite ? this.props.removeFromFavorite : this.props.addToFavorite}
              title={this.props.isFavorite ? "Remove from favorites" : "Add to favorites"}>
            </Star>
          </div>
          <p>{description}</p>
        </div> 
      </div>
    );
  }
};

const mapStateToProps = (state: any, props: any) => ({
  isFavorite: state.favoriteMovies.ids.has(props.movieData.id)
});

const mapDispatchToProps = (dispatch: any, props: any) => ({
  removeFromFavorite: () => dispatch(removeFromFavorite(props.movieData.id)),
  addToFavorite: () => dispatch(addToFavorite(props.movieData.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
