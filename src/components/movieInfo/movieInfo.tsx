import React from 'react';
import { connect } from 'react-redux';
import { IMovieData } from '../movieCard';
import styles from './movieInfo.module.scss';
import commonStyles from '../components.module.scss';
import { hide, show } from '../../redux/actions';

class MovieInfo extends React.Component<{ movieData: IMovieData, isVisible: boolean, hide: any, show: any }> {
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
            <div className={styles.iconVisibility} 
              data-visibile={this.props.isVisible.toString()} 
              onClick={this.props.isVisible ? this.props.hide : this.props.show}>
            </div>
          </div>
          <p>{description}</p>
        </div> 
      </div>
    );
  }
};

const mapStateToProps = (state: any, props: any) => ({
  isVisible: !state.hiddenMovies.ids.has(props.movieData.id)
});

const mapDispatchToProps = (dispatch: any, props: any) => ({
  hide: () => dispatch(hide(props.movieData.id)),
  show: () => dispatch(show(props.movieData.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
