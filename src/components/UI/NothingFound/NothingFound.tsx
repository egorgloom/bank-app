import { FC } from 'react';

import styles from './NothingFound.module.scss'

interface INothingFound {
    title?: string
    children?: React.ReactNode,
}

const NothingFound: FC<INothingFound> = ({ children, ...props}) => {
  return (
    <div className={styles.nothingFound}>
        {children}
        {props.title}
    </div>
  );
};

export default NothingFound;