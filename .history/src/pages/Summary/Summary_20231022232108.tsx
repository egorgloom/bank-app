import  { FC } from 'react';

import TotalBalance from '../../components/TotalBalance/TotalBalance'

import ReferralLink from './../../components/ReferralLink/ReferralLink';
import RecentContacts from './../../components/RecentContacts/RecentContacts';
import TransactionsHistory from '../../components/TransactionsHistory/TransactionsHistory';





const Summary: FC = () => {
  return (
    <>
    <div className='referralWrapper'>
            <TotalBalance />
            <ReferralLink />

          </div>
          <RecentContacts />
          <TransactionsHistory />
    </>
  );
};

export default Summary;