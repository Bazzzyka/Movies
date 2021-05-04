import React from 'react';
import { IMovieData } from '../movieCard';
import styles from './movieInfo.module.scss';
import commonStyles from '../components.module.scss';

class MovieInfo extends React.Component<{ movieData: IMovieData }, {}> {
  public render() {
    const { id, title, year, rating, genres, description, coverImageSrc } = this.props.movieData;

    return (
      <div className={commonStyles.row}>
        <img src={coverImageSrc} className={styles.img} />
        <div className={commonStyles.column}>
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
}

export default MovieInfo;
