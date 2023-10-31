import { FC } from 'react';

import styles from './Card.module.scss'

interface ICard { }

const Card: FC<ICard> = () => {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.card}>
                    <div className='flex'>
                        <span className={styles.userName}>Orlov Egor</span>
                        <span className={styles.mastercardIcon}>
                        </span>
                    </div>
                    <div className='flex'>
                        <input type='number' placeholder='1234 5678 9012 3456' disabled
                            className={styles.numberCard}
                        />
                        <div className={styles.cvvDiv}>
                            <input type="number" placeholder='CVV' disabled
                                className={styles.cvv} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;