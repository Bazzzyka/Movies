import React from 'react';
import Header from '../header';
import List from '../list';
import HiddenMovies from '../hiddenMovies';

const App = () => { 
  return (
    <div>
      <Header />
      <div className="row">
        <HiddenMovies />
        <List moviesData={[]} />
      </div>
    </div>
  );
};

export default App;
