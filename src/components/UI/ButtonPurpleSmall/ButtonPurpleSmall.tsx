import { FC } from 'react';

import './ButtonPurpleSmall.scss'

interface IButtonPurpleSmall {
    children?: React.ReactNode,
    title: string,
}

const ButtonPurpleSmall: FC<IButtonPurpleSmall> = ({children, title}) => {
  return (
    <button className='btnPurpleSmall'>
        {children}
        {title}
    </button>
  );
};

export default ButtonPurpleSmall;