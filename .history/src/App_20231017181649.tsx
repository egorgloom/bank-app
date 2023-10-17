
// import './styles/App.scss';


// import Header from './components/Header/Header'
// import NavigationLink from './components/NavigationLink/NavigationLink';
// import Sidebar from './components/Sidebar/Sidebar';
// import TotalBalance from './components/TotalBalance/TotalBalance';
// import ReferralLink from './components/ReferralLink/ReferralLink';
// import RecentContacts from './components/RecentContacts/RecentContacts';
// import TransactionsHistory from './components/TransactionsHistory/TransactionsHistory';





// function App() {

//   return (
//     <>
//       <div className='container'>
//         <Header />
//         <NavigationLink />
//         <Sidebar />
//         <div className='pageContainer'>
//           <div className='referralWrapper'>
//             <TotalBalance />
//             <ReferralLink />
//           </div>
//           <RecentContacts />
//           <TransactionsHistory />

//         </div>
//       </div>

//     </>
//   )
// }

// export default App


import './styles/App.scss';

import { Outlet } from 'react-router-dom';






function App() {

  return (
    <div>
      <Outlet />

    </div>
  )
}

export default App
