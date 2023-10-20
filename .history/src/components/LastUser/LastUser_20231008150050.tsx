import { FC } from 'react';

import styles from './LastUser.module.scss';

import USER from '../../assets/user.svg'

interface ILastUser { }

const LastUser: FC<ILastUser> = () => {
    return (
        <div className={styles.lastUser}>
            <figure>
                <img src={USER} alt="user" />
            </figure>
            <p>Name</p>
        </div>
    );
};

export default LastUser;