import { FC } from 'react';

import { IHistory } from '../../interfaces/interface';

import styles from './UserHistory.module.scss'

interface IUserHistory {
    user: IHistory
 }

const UserHistory: FC<IUserHistory> = ({...props}:IUserHistory) => {


    return (
        <div className={styles.userBlock}>
            <div className={styles.user}>
                <span>{props.user.firstName?.slice(0,1)}{props.user.lastName?.slice(0,1)}</span>
            </div>
            <div className={styles.info}>
                <span className={styles.first}>{props.user.firstName} {props.user.lastName}</span>
                <span className={styles.second}>{props.user.description}</span>
            </div>
            <div className={styles.info}>
                <span className={styles.first}>
                    {props.user.dayWeek}. {props.user.day} {props.user.month} {props.user.year}
                    </span>
                <span className={styles.second}>{props.user.time}</span>
            </div>
            <div className={styles.sumBlock}>
                <span className={styles.usd}>{props.user.currency}</span>
                <span className={styles.sum}>{props.user.sum}</span>
            </div>
        </div>
    );
};

export default UserHistory;