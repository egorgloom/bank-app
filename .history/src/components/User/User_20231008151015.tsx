import { FC } from 'react';

import USER from '../../assets/user.svg';

import styles from './User.module.scss'


interface IUser {}

const User: FC<IUser> = () => {
  return (
    <div className={styles.userContainer}>
        <h3>Welcome back, <span> Egor!</span></h3>
        <img src={USER} alt="userImage" className={styles.userImage}/>
    </div>
  );
};

export default User;