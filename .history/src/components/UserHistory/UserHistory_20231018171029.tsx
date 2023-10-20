import { FC } from 'react';

import { format } from 'date-fns'

import { ITransactionsHistory } from '../../interfaces/interface';

import styles from './UserHistory.module.scss'

const UserHistory: FC<ITransactionsHistory> = ({...props}) => {
    let date = new Date(props.date);
    // let form1 = props.date.format(props.date, 'dd/MM/yyyy')
    // {props.date.format(props.date, 'dd/MM/yyyy')}
    const today = Date.now();

    console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(date));

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
                    {`${date}`}
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