import React, { useState } from 'react';
import Header from '../header';
import List from '../list';
import FavoriteMovies from '../favoriteMovies';
import { DATA } from '../../data';
import commonStyles from '../components.module.scss';
import appStyles from './app.module.scss';

const App = () => {
  let [isFavoritesVisible, setIsFavoritesVisible] = useState(false);

  const onListClick = (): void => {
    isFavoritesVisible = !isFavoritesVisible;
  }; 

  return (
    <div className={`${commonStyles.column} ${appStyles.bodyContainer}`}>
      <Header onListClick={() => setIsFavoritesVisible(false)} onFavoriteListClick={() => setIsFavoritesVisible(true)} isFavoritesVisible={isFavoritesVisible} />
      <div className={`${commonStyles.row} ${appStyles.listContainer}`}>
        <List moviesData={DATA} isVisible={!isFavoritesVisible} />
        <FavoriteMovies isVisible={isFavoritesVisible} />
      </div>
    </div>
  );
};

export default App;
