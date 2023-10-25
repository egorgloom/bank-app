import { FC} from 'react';

// import './MyModal.module.css'

interface IMyModal {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    children?: React.ReactNode,

}

const MyModal: FC<IMyModal> = ({active, setActive, children}) => {


  return (
    <div className={active ? 'myModal active' : 'myModal'} onClick={()=> setActive(false)}>
        <div className={active ? 'modalContainer active' : 'modalContainer'} onClick={(e)=> e.stopPropagation()}>
            {children}
        </div>
    </div>
  );
};

export default MyModal;