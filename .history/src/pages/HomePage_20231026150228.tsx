import { FC } from 'react';

import '../styles/App.scss';

import Header from '../components/Header/Header';
import NavigationLink from '../components/NavigationLink/NavigationLink';
import Sidebar from '../components/Sidebar/Sidebar';
import Summary from './Summary/Summary';
import { Routes, Route } from 'react-router-dom';
import CardPage from './CardsPage/CardPage';



interface IHomePage {}

const HomePage: FC<IHomePage> = () => {
  return (
    <div className='container'>
    <Header />
    <NavigationLink />
    <Sidebar />
    <div className='pageContainer'>
       <Routes>
           <Route path='/summary' element={<Summary />}/>
           {/* <Route path='/cards' element={<CardPage />}/> */}
          </Routes>
    </div>
  </div>
  );
};

export default HomePage;