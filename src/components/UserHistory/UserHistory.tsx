import { FC } from 'react';

import { ITransactionsHistory } from '../../interfaces/interface';

import styles from './UserHistory.module.scss'

const UserHistory: FC<ITransactionsHistory> = ({...props}) => {

    let date = new Date(props.date);
    let optionsDate: object = {
        weekday: "long",
         year: 'numeric',
         month: 'long',
        day: 'numeric'
    }
    let today = new Intl.DateTimeFormat('en-US', optionsDate ).format(date)

    return (
        <div className={styles.userBlock}>
            <div className={styles.user}>
                <span>{props.firstName?.slice(0,1)}{props.lastName?.slice(0,1)}</span>
            </div>
            <div className={styles.info}>
                <span className={styles.first}>{props.firstName} {props.lastName}</span>
                <span className={styles.second}>{props.description}</span>
            </div>
            <div className={styles.info}>
                <span className={styles.first}>
                    {`${today}`}
                </span>
                <span className={styles.second}>{props.time}</span>
            </div>
            <div className={styles.sumBlock}>
                <span className={styles.usd}>{props.currency}</span>
                <span className={styles.sum}>{props.sum}</span>
            </div>
        </div>
    );
};

export default UserHistory;