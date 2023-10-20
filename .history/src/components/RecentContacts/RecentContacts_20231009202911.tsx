import { FC } from 'react';


import BtnDashed from '../UI/BtnCircle/BtnCircle';
import Button from '../UI/Button/Button';

import { HiPlus } from 'react-icons/hi'

import styles from './RecentContacts.module.scss'

import LastUser from '../LastUser/LastUser';

interface IRecentContacts { }

const RecentContacts: FC<IRecentContacts> = () => {
    return (
        <div className={styles.recentContainer}>
            <div className='flex-between'>
                <span className={styles.recent}>Recent Contacts</span>
                <Button title='All Contacts' color='smallPurple'/>
            </div>
            <div className={styles.lastUsers}>
                <div>
                    <BtnDashed icon={<HiPlus />} title='Add' color='dashed'/>
                </div>
                <div className={styles.lastUserList}>
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                </div>
            </div>

        </div>
    );
};

export default RecentContacts;