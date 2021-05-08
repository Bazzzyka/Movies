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
    const { title, year, rating, genres, description, coverImageSrc } = this.props.movieData;

    return (
      <div className={styles.container} data-visible={this.props.isVisible}>
        <div className={styles.background}>
          <div className={styles.card}>
            <div className={styles.header}>{title} ({year})</div>
            <CloseIcon className={styles.closeButton} onClick={this.props.closeCard} />
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
