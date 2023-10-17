import  { FC } from 'react';

import TotalBalance from './../TotalBalance/TotalBalance';
import ReferralLink from './../ReferralLink/ReferralLink';
import RecentContacts from './../RecentContacts/RecentContacts';
import TransactionsHistory from '../TransactionsHistory/TransactionsHistory';




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