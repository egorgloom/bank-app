import { FC } from 'react';

import BtnDashed from '../UI/BtnCircle/BtnCircle';
import Button from '../UI/Button/Button';
import Loading from '../UI/Loading/Loading';

import { HiPlus } from 'react-icons/hi'

import styles from './RecentContacts.module.scss'

import LastUser from '../LastUser/LastUser';

import useFetchData from '../../hooks/useFetching';

import { ITransactionsHistory } from '../../interfaces/interface';


const RecentContacts: FC = () => {

    const { data, loading } = useFetchData<ITransactionsHistory[]>('https://server-shop-co.onrender.com/history')

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
                    {loading ? <Loading title='Loading...'/> : 
                    <>
                    {data?.map(user => <LastUser key={user.id} {...user}/>)}
                    </>
                    }

                </div>
            </div>

        </div>
    );
};

export default RecentContacts;