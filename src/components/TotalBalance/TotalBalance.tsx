import { FC } from 'react';

import styles from './TotalBalance.module.scss'

import Button from './../UI/Button/Button';

import { HiArrowDown, HiArrowUp } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi'

interface IBalance {
}

const Balance: FC<IBalance> = () => {

  let number = 29475

  const val = new Intl.NumberFormat('de-DE', { 
    style: 'currency',
    currency: 'USD', 
    currencyDisplay: "code" 
  })
  .format(number)
  .replace("USD", "")
  .trim()

  return (
    <div className={styles.balanceContainer}>
        <span className={styles.title}>Total Balance</span>
        <div className={styles.balance}>
            {val} <span className={styles.currency}>USD</span>
        </div>
        <div className={styles.btnBlock}>
            <Button title='Send' icon={<HiArrowUp/>} color='purple' />
            <Button title='Request' icon={<HiArrowDown/>} color='gray'/>
            <Button title='Top Up' icon={<HiPlus />} color='gray'/>
        </div>
    </div>
  );
};

export default Balance;