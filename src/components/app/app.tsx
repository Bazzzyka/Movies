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

// const loadData = () => {
//   fetch("https://imdb8.p.rapidapi.com/title/get-full-credits?tconst=tt0786945", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "f89ec78088msh3620820a1e395a3p13f6fejsndfa8870d6cdc",
// 		"x-rapidapi-host": "imdb8.p.rapidapi.com"
// 	}
// })
// .then(response => {
//   return response.json();
// })
// .then(data => {
//   debugger
// 	console.log(data);
// });
// }

// loadData();

export default App;
