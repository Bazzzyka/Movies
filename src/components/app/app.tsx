import React from 'react';
import Header from '../header';
import List from '../list';
import HiddenMovies from '../hiddenMovies';
import { DATA } from '../../data';
import commonStyles from '../components.module.scss';

const App = () => { 
  return (
    <div className={commonStyles.column}>
      <Header />
      <div className={commonStyles.row}>
        <HiddenMovies />
        <List moviesData={DATA} />
      </div>
    </div>
  );
};

export default App;
