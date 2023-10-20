import { FC } from 'react';

interface INothingFound {
    title?: string
    children?: React.ReactNode,
}

const NothingFound: FC<INothingFound> = ({...props, children}) => {
  return (
    <div >
        {children}
        {props.title}
    </div>
  );
};

export default NothingFound;