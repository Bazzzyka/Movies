import React, { useState } from 'react';
import Header from '../header';
import List from '../list';
import FavoriteMovies from '../favoriteMovies';
import { DATA } from '../../data';
import appStyles from './app.module.scss';

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
      </div>
    </div>
  );
};

export default App;
