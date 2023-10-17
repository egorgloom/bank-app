import { FC } from 'react';

import '../styles/App.scss';

import Header from '../components/Header/Header';
import NavigationLink from '../components/NavigationLink/NavigationLink';
import Sidebar from '../components/Sidebar/Sidebar';
import Summary from './Summary/Summary';







interface IHomePage {}

const HomePage: FC<IHomePage> = () => {
  return (
    <div className='container'>
    <Header />
    <NavigationLink />
    <Sidebar />
    <div className='pageContainer'>
      <Summary />
    </div>
  </div>
  );
};

export default HomePage;