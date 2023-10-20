import { FC } from 'react';

import { clsx } from 'clsx';

import styles from './BtnWithText.module.scss'

interface IBtnWithText {
    children?: React.ReactNode,
    icon?: React.ReactNode,
    value?: string,
    color: 'darkGrey' | 'lightGray',
    onClick?: React.MouseEventHandler<HTMLButtonElement>,

}

const BtnWithText: FC<IBtnWithText> = ({ color, children, ...props }) => {

    const colorTheme = {
        darkGrey: styles.darkGrey,
        lightGray: styles.lightGray,
    }
    return (
        <div className={clsx(styles.btnContainer, colorTheme[color])}>
            {children}
            <input
            placeholder='Select Date Range'
            value={props.value}
            type='text'
            />
            <button className={styles.btnCircle} {...props}>
                {children}
                {props.icon}
            </button>
        </div>
    );
};

export default BtnWithText;