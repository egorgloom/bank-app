import LOGO from '../../assets/logo.svg';

import styles from './Header.module.scss'

import User from '../User/User';

import { Link } from 'react-router-dom';

import BtnCircle from './../UI/BtnCircle/BtnCircle';

import {GiHamburgerMenu} from 'react-icons/gi'
import NavigationLink from '../NavigationLink/NavigationLink';
import { useState } from 'react';



const Header = () => {

  const [menuActive, setMenuActive] = useState<boolean>(false)


  return (
    <div className={styles.header}>
      <Link to={'/home'}>
        <img src={LOGO} alt="logo" className={styles.logo} />
      </Link>
      <User />
      <NavigationLink active={menuActive} setActive={setMenuActive}/>
      <div className='burger' onClick={()=>setMenuActive(!menuActive)}>
                <BtnCircle color={'purple60'} icon={<GiHamburgerMenu />}/>
            </div>
    </div>
  );
};

export default Header;