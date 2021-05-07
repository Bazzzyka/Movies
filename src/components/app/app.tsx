import React, { useState } from 'react';
import Header from '../header';
import List from '../list';
import FavoriteMovies from '../favoriteMovies';
import { DATA } from '../../data';
import commonStyles from '../components.module.scss';
import appStyles from './app.module.scss';

const App = () => {
  let [isFavouritesVisible, setIsFavouritesVisible] = useState(false);

  const onListClick = (): void => {
    isFavouritesVisible = !isFavouritesVisible;
  }; 

  return (
    <div className={`${commonStyles.column} ${appStyles.bodyContainer}`}>
      <Header onListClick={() => setIsFavouritesVisible(false)} onFavoriteListClick={() => setIsFavouritesVisible(true)} />
      <div className={`${commonStyles.row} ${appStyles.listContainer}`}>
        <List moviesData={DATA} isVisible={!isFavouritesVisible} />
        <FavoriteMovies isVisible={isFavouritesVisible} />
      </div>
    </div>
  );
};

export default App;
