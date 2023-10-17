import { FC } from 'react';

import styles from './Sidebar.module.scss';

import { FaWallet } from 'react-icons/fa'
import { RxBorderDotted } from 'react-icons/rx'
import { BiLockOpen } from 'react-icons/bi'
import { BiEditAlt } from 'react-icons/bi'
import { HiMinus, HiPlus } from 'react-icons/hi'

import BtnSidebar from './../UI/BtnSidebar/BtnSidebar';
import Button from '../UI/Button/Button';

import Card from '../Card/Card';
import GetMoney from '../GetMoney/GetMoney';




interface ISidebar {

 }

const Sidebar: FC<ISidebar> = () => {
    return (
        <div className={styles.sidebarWrapper}>
            <div className={styles.sidebarContainer}>
                <div className='flex-between'>
                    <span className={styles.cards}>Cards</span>
                    <Button title='Show All' color='smallPurple'/>
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
                    <Button title='Add Card' icon={<HiPlus />} color='purple'/>
                    <Button title='Remove' icon={<HiMinus />} color='pink'/>
                    {/* <button className={styles.btna}>
                        abc
                    </button>
                    <button className={styles.btna}>
                        abc
                    </button> */}
                </div>
            </div>
            <GetMoney />

        </div>


    );
};

export default Sidebar;