import { FC } from 'react';

interface INothingFound {
    title?: string
    children?: React.ReactNode,
}

const NothingFound: FC<INothingFound> = ({ children, ...props}) => {
  return (
    <div >
        {children}
        {props.title}
    </div>
  );
};

export default NothingFound;