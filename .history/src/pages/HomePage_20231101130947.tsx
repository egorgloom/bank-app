import { FC } from 'react';

import '../styles/App.scss';

import Header from '../components/Header/Header';

import Sidebar from '../components/Sidebar/Sidebar';
import Summary from './Summary/Summary';
import { Routes, Route } from 'react-router-dom';
import CardPage from './CardsPage/CardPage';
import ActivityPage from './Activity/ActivityPage';



interface IHomePage {}

const HomePage: FC<IHomePage> = () => {
  return (
    < >
    <Header />
    <div className='container'>
      <Sidebar />
      <div className='pageContainer'>
       <Routes>
           <Route path='*' element={<Summary />}/>
           <Route path='/Cards' element={<CardPage />}/>
           <Route path='/Activity' element={<ActivityPage />}/>
          </Routes>
    </div>
    </div>

  </>
  );
};

export default HomePage;