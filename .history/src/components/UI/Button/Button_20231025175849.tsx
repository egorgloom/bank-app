import { clsx } from 'clsx';

import { FC } from 'react';

import styles from './Button.module.scss';

interface IButton  {
    children?: React.ReactNode,
    title?: string,
    icon?: React.ReactNode,
    color : 'purple' | 'pink' | 'gray' | 'smallPurple',
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"],
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button: FC<IButton> = ({color, children, ...props}) => {

  const colorTheme = {
    pink: styles.pink,
    purple: styles.purple,
    gray: styles.gray,
    smallPurple: styles.smallPurple,
  }

  return (
    <button {...props} className={clsx(styles.ButtonPurple, colorTheme[color])} onClick={props.onClick}>
        {children}
        {props.title}
        {props.icon}
    </button>
  );
};

export default Button;