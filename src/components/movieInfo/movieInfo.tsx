import React from 'react';
import { connect } from 'react-redux';
import { IMovieData } from '../movieCard';
import styles from './movieInfo.module.scss';
import commonStyles from '../components.module.scss';
import { hide, show } from '../../redux/actions';

class MovieInfo extends React.Component<{ movieData: IMovieData }, { isVisible: boolean }> {
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
          <p>{genres.join(', ')}</p>
          <p>{description}</p>
        </div> 
      </div>
    );
  }
};

const mapStateToProps = (state: any) => ({
  // isVisible: state.hiddenMovies.find(item.id)
});

const mapDispatchToProps = {
  hide,
  show
};

// const mapDispatchToProps = (dispatch: any) => ({
//   hide: () => dispatch(hide()),
//   show: () => dispatch(show())
// });

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
