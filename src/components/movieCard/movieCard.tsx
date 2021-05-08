import React from 'react';
import { connect } from 'react-redux';
import { closeCard } from '../../redux/actions';
import { cardSelector } from '../../redux/reducers/selectors';
import styles from './movieCard.module.scss';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

export interface IMovieData {
  id: number;
  title: string;
  year: number;
  rating: number;
  genres: string[];
  cast: string[];
  director: string;
  producer: string;
  description: string;
  coverImageSrc: string;
}

interface IProps {
  movieData: IMovieData; 
  isVisible: boolean;
  closeCard: any;
}

class MovieCard extends React.Component<{ movieData: IMovieData, isVisible: boolean, closeCard: any }> {
  public render() {
    const { title, year, rating, genres, cast, director, producer, description, coverImageSrc } = this.props.movieData;

    return (
      <div className={styles.container} data-visible={this.props.isVisible}>
        <div className={styles.background}>
          <div className={styles.card}>
            <div className={styles.header}>
              <h2 className={styles.caption}>{title} ({year})</h2>
              <CloseIcon className={styles.closeButton} onClick={this.props.closeCard} />
            </div>
            <div className={styles.body}>
              <div className={styles.mainInfoRow}>
                <img src={coverImageSrc} alt="Movie cover" />
                <div className={styles.infoColumn}>
                  <div className={styles.infoRow}>
                    <h4>Genres:</h4>
                    <p>{genres.join(', ')}</p>
                  </div>
                  <div className={styles.infoRow}>
                    <h4>Actors:</h4>
                    <p>{cast.join(', ')}</p>
                  </div>
                  <div className={styles.infoRow}>
                    <h4>IMDB:</h4>
                    <p>{rating}</p>
                  </div>
                  <div className={styles.infoRow}>
                    <h4>Director:</h4>
                    <p>{director}</p>
                  </div>
                  <div className={styles.infoRow}>
                    <h4>Producer:</h4>
                    <p>{producer}</p>
                  </div>
                </div>
              </div>
              <div>{description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any, props: any) => ({
  movieData: cardSelector(state),
  isVisible: state.movieCard.isVisible
});

const mapDispatchToProps = (dispatch: any, props: IProps) => ({
  closeCard: () => dispatch(closeCard(props.movieData.id))
 });

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
