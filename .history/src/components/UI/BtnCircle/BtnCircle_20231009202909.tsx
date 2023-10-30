import { clsx } from 'clsx';

import React, { FC } from 'react';

import styles from './BtnCircle.module.scss';


interface IBtnCircle{
    children?: React.ReactNode,
    title?: string,
    icon?: React.ReactNode,
    color: 'black' | 'dashed' | 'purple',

}

const BtnCircle: FC<IBtnCircle> = ({ color, children, ...props}) => {

    const colorTheme = {
    dashed: styles.btnDashed,
    black: styles.black,
    purple: styles.purple,
}
    return (
        <div className={styles.btnDashedContainer}>
            <button className={clsx(styles.btnDashed, colorTheme[color])} {...props}>
                {children}
                {props.icon}
            </button>
            {props.title}
        </div>
    );
};

export default BtnCircle;