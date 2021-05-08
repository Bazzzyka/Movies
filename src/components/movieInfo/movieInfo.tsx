import React, { MouseEventHandler } from 'react';
import { connect } from 'react-redux';
import { IMovieData } from '../movieCard';
import { removeFromFavorite, addToFavorite, openCard } from '../../redux/actions';
import { ReactComponent as Star } from '../../icons/star.svg';
import styles from './movieInfo.module.scss';

interface IProps {
  movieData: IMovieData;
  isFavorite: boolean;
  removeFromFavorite: any;
  addToFavorite: any;
  openCard: any;
}

class MovieInfo extends React.Component<{ movieData: IMovieData, isFavorite: boolean, removeFromFavorite: any, addToFavorite: any, openCard: any }> {
  constructor(props: IProps) {
    super(props);

    this.favoriteClickHandler = this.favoriteClickHandler.bind(this);
  }
  
  public render() {
    const { title, year, rating, genres, description, coverImageSrc } = this.props.movieData;

    return (
      <div className={styles.container} onClick={this.props.openCard}>
        <img src={coverImageSrc} className={styles.img} />
        <div className={styles.infoContainer}>
          <div className={styles.headerRow}>
            <h2>{title} ({year})</h2>
            <div>IMDB rating: {rating}</div>
          </div>
          <div className={styles.subHeaderRow}>
            <div>{genres.join(', ')}</div>
            <Star className={styles.iconVisibility}
              data-favorite={this.props.isFavorite.toString()} 
              onClick={this.favoriteClickHandler}
              title={this.props.isFavorite ? "Remove from favorites" : "Add to favorites"}>
            </Star>
          </div>
          <p>{description}</p>
        </div> 
      </div>
    );
  }

  private favoriteClickHandler(e: any): void {
    e.stopPropagation();
    this.props.isFavorite ? this.props.removeFromFavorite(this.props.movieData.id) : this.props.addToFavorite(this.props.movieData.id);
  }
};

const mapStateToProps = (state: any, props: any) => ({
  isFavorite: state.favoriteMovies.ids.has(props.movieData.id)
});

const mapDispatchToProps = (dispatch: any, props: any) => ({
  removeFromFavorite: () => dispatch(removeFromFavorite(props.movieData.id)),
  addToFavorite: () => dispatch(addToFavorite(props.movieData.id)),
  openCard: () => dispatch(openCard(props.movieData.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
