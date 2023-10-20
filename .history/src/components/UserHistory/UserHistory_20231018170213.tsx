import { FC } from 'react';

import { format } from 'date-fns'

import { ITransactionsHistory } from '../../interfaces/interface';

import styles from './UserHistory.module.scss'

const UserHistory: FC<ITransactionsHistory> = ({...props}) => {
    let date = {
        dat: format(props.date, 'dd/MM/yyyy'),
    }


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
                    {`${date.dat}`}
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