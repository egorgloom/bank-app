import { FC, useState } from 'react';

import styles from './Sidebar.module.scss';

import { FaWallet } from 'react-icons/fa'
import { RxBorderDotted } from 'react-icons/rx'
import { BiLockOpen } from 'react-icons/bi'
import { BiEditAlt } from 'react-icons/bi'
import { HiPlus } from 'react-icons/hi'

import BtnSidebar from './../UI/BtnSidebar/BtnSidebar';
import Button from '../UI/Button/Button';
import MyModal from '../UI/MyModal/MyModal';

import Card from '../Card/Card';
import GetMoney from '../GetMoney/GetMoney';
import AddCard from '../AddCard/AddCard';

import { Link } from 'react-router-dom';


const Sidebar: FC = () => {

    const [modalActive, setModalActive] = useState<boolean>(false);

    return (
        <div className={styles.sidebarWrapper}>
            <div className={styles.sidebarContainer}>
                <div className='flex-between'>
                    <span className={styles.cards}>Cards</span>
                    <Link to='/Cards'>
                    <Button title='Show All' color='smallPurple'/>
                    </Link>
                </div>
                <Card />
                <ul className={styles.sidebarOptions}>
                    <li>
                        <BtnSidebar 
                        title='Show Card Details' 
                        icon={<FaWallet/>}/>
                    </li>
                    <li>
                        <BtnSidebar 
                        title='Your PIN' 
                        icon={<RxBorderDotted/>}/>
                    </li>
                    <li>
                        <BtnSidebar 
                        title='Security Code' 
                        icon={<BiLockOpen/>}/>
                    </li>
                    <li>
                        <BtnSidebar 
                        title='Edit Limits' 
                        icon={<BiEditAlt/>}/>
                    </li>
                </ul>
                <div className={styles.buttons}>
                    <Button title='Add Card' icon={<HiPlus />} color='purple' onClick={()=>setModalActive(true)}/>
                    <MyModal active={modalActive} setActive={setModalActive}>
                        <AddCard />
                    </MyModal>
                </div>
            </div>
            <GetMoney />
        </div>
    );
};

export default Sidebar;