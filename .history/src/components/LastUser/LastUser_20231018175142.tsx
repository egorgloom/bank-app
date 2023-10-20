import { FC } from 'react';

import styles from './LastUser.module.scss';

import USER from '../../assets/user.svg'
import { ITransactionsHistory } from '../../interfaces/interface';

interface ILastUser extends ITransactionsHistory { 

}

const LastUser: FC<ILastUser> = ({...props}) => {
    return (
        <div className={styles.lastUser}>
            <figure>
                <img src={USER} alt="user" />
            </figure>
            <p>{props.firstName} {`${props.lastName?.slice(0,1)}`}</p>
        </div>
    );
};

export default LastUser;