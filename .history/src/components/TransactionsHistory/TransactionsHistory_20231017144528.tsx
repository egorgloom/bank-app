import { FC } from 'react';

import styles from './TransactionsHistory.module.scss';


import { HiOutlineCalendarDays } from 'react-icons/hi2';

import { IoMdArrowDropright } from 'react-icons/io';

import BtnWithText from '../UI/BtnWithText/BtnWithText';
import BtnDashed from '../UI/BtnCircle/BtnCircle';








// https://server-shop-co.onrender.com/history




const TransactionsHistory: FC = () => {



    return (
        <div className={styles.transactionContainer}>
            <div className={styles.titleContainer}>
                <span className={styles.title}>Transactions History</span>
                <div className={styles.btnBlock}>
                    <BtnWithText icon={<HiOutlineCalendarDays />} title='Select Date Range' color='lightGray' />
                    <BtnDashed color='purple' icon={<IoMdArrowDropright />} />
                    
                </div>
            </div>
            <div className={styles.blockHistory}>
               
            </div>

        </div>
    );
};

export default TransactionsHistory;