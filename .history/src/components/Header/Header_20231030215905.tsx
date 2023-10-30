import LOGO from '../../assets/logo.svg';

import styles from './Header.module.scss'

import User from '../User/User';

import { Link } from 'react-router-dom';

import BtnCircle from './../UI/BtnCircle/BtnCircle';

import {GiHamburgerMenu} from 'react-icons/gi'



const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={'/home'}>
        <img src={LOGO} alt="logo" className={styles.logo} />
      </Link>
      <User />
      <BtnCircle color={'purple'} icon={<GiHamburgerMenu/>} className={styles.burger}/>
    </div>
  );
};

export default Header;