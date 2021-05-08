import React, { useState } from 'react';
import Header from '../header';
import List from '../list';
import FavoriteMovies from '../favoriteMovies';
import MovieCard, { IMovieData } from '../movieCard';
import { DATA } from '../../data';
import appStyles from './app.module.scss';

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

const App = () => {
  let [isFavoritesVisible, setIsFavoritesVisible] = useState(false);

  return (
    <div className={appStyles.bodyContainer}>
      <Header 
        onListClick={() => setIsFavoritesVisible(false)} 
        onFavoriteListClick={() => setIsFavoritesVisible(true)} 
        isFavoritesVisible={isFavoritesVisible} />
      <div className={appStyles.listContainer}>
        <List moviesData={DATA} isVisible={!isFavoritesVisible} />
        <FavoriteMovies isVisible={isFavoritesVisible} />
        <MovieCard movieData={initMovieCardData} isVisible={false} closeCard={null} />
      </div>
    </div>
  );
};

export default App;
