import LOGO from '../../assets/logo.svg';

import styles from './Header.module.scss'

import User from '../User/User';

import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={'/home'}>
        <img src={LOGO} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.burger}>BURGER</div>
      <User />
    </div>
  );
};

export default Header;