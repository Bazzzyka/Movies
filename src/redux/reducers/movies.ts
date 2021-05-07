import { DATA } from '../../data';

export default (movies: any = DATA, action: any) => {
  const { type } = action;

  switch(type) {
    default: 
    return movies;
  }
};
