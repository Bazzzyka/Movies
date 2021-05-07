import React from 'react';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Star } from '../../icons/star.svg';
import styles from './header.module.scss';
import commonStyles from '../components.module.scss';

const Header = () => {
  return (
    <div className={`${commonStyles.row} ${styles.container}`}>
      <Logo className={styles.logo} />
      <h1 className={styles.header}>
        Movies to watch, enjoy, relax and inspire
      </h1>
      <Star className={styles.favorites} />
    </div>
  );
};

export default Header;
