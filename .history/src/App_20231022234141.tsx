// import './styles/App.scss';

// import { Outlet } from 'react-router-dom';



// function App() {

//   return (
//     <div>
//       <Outlet />

//     </div>
//   )
// }

// export default App



import './styles/App.scss';


import Header from './components/Header/Header'
import NavigationLink from './components/NavigationLink/NavigationLink';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Summary from './pages/Summary/Summary';

import CardPage from './pages/CardsPage/CardPage';
import { useState } from 'react';







function App() {


  return (
    <>
      <div className='container'>
        <Header />
        <NavigationLink />
        <Sidebar />
        
        
        <div className='pageContainer'>
        <Routes>
            <Route path='/summary' element={<Summary />}/>
            <Route path='/cards' element={<CardPage />}/>
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
