import { FC } from 'react';


import styles from './GetMoney.module.scss'
import BtnDashed from '../UI/BtnCircle/BtnCircle';

import {HiOutlineCursorClick} from 'react-icons/hi'


interface IGetMoney { }

const GetMoney: FC<IGetMoney> = () => {
    return (
        <div className={styles.moneyContainer}>

            <div className={styles.money}>
                <BtnDashed icon={<HiOutlineCursorClick />} color='black'/>
                <p>You have USD 1,000 pending money, it will be ready in 2 business days.</p>
            </div>
            <a href="">Get your money now &#8594;</a>
        </div>
    );
};

export default GetMoney;