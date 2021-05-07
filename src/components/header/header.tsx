import React from 'react';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Star } from '../../icons/star.svg';
import styles from './header.module.scss';
import commonStyles from '../components.module.scss';

interface IProps {
  onListClick: () => void;
  onFavoriteListClick: () => void;
  isFavoritesVisible: boolean;
};

const Header = (props: IProps) => {
  return (
    <div className={`${commonStyles.row} ${styles.container}`}>
      <Logo className={styles.logo} onClick={props.onListClick} />
      <h1 className={styles.header} data-wide-letters={props.isFavoritesVisible.toString()}>
        {props.isFavoritesVisible ? "Favorites" : "Movies to watch, enjoy, relax and inspire"}
      </h1>
      <Star className={styles.favorites} onClick={props.onFavoriteListClick} />
    </div>
  );
};

export default Header;
