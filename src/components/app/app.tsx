import React from 'react';
import Header from '../header';
import List from '../list';
import HiddenMovies from '../hiddenMovies';
import { DATA } from '../../data';
import commonStyles from '../components.module.scss';
import appStyles from './app.module.scss';

const App = () => { 
  return (
    <div className={`${commonStyles.column} ${appStyles.bodyContainer}`}>
      <Header />
      <div className={`${commonStyles.row} ${appStyles.listContainer}`}>
        <HiddenMovies />
        <List moviesData={DATA} />
      </div>
    </div>
  );
};

export default App;
