import { FC } from 'react';

import BtnDashed from '../UI/BtnCircle/BtnCircle';
import Button from '../UI/Button/Button';
import Loading from '../UI/Loading/Loading';

import { HiPlus } from 'react-icons/hi'

import styles from './RecentContacts.module.scss'

import LastUser from '../LastUser/LastUser';

import { ITransactionsHistory } from '../../interfaces/interface';
import { useGetHistoryQuery } from '../API/JsonServer';


const RecentContacts: FC = () => {

   const {data, isLoading} = useGetHistoryQuery('')


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
                    {isLoading ? <Loading title='Loading...'/> : 
                    <>
                    {data?.map((user: ITransactionsHistory) => <LastUser key={user.id} {...user}/>)}
                    </>
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentContacts;