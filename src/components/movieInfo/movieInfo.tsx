import React from 'react';
import { IMovieData } from '../movieCard';

class movieInfo extends React.Component<{ movieData: IMovieData }> {
  public render() {
    return (
      <div>Movie info</div>
    );
  }
}

export default movieInfo;
