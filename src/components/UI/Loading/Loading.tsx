import { FC } from 'react';

import styles from './Loading.module.scss'

interface ILoading {
    title: string,
}


const Loading: FC<ILoading> = ({ ...props }) => {
    return (
        <div className={styles.center}>
            <p className={styles.title}>
                {props.title}
            </p>
            <div className={styles.myLoader}>
            </div>
        </div>
    );
};

export default Loading;