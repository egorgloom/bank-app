import { FC } from 'react';

import { useGetCardQuery } from '../../components/API/JsonServer';
import Loading from '../../components/UI/Loading/Loading';


import 'react-credit-cards-2/dist/lib/styles.scss';

import Cards from 'react-credit-cards-2';
import Button from './../../../.history/src/components/UI/Button/Button_20231023171100';


interface ICardPage { }

const CardPage: FC<ICardPage> = () => {

  const { data, isLoading } = useGetCardQuery('');


  return (
    <>
      <div className='cardsPage'>
        {isLoading ? (<Loading title='Loading...' />) : data ? (
          data.map((elem: any) =>             <>
          <Cards key={elem.number} cvc={elem.cvc} expiry={elem.expiry} name={elem.name} number={elem.number} />
          <div><Button color={'pink'} title='Remove'/></div>
          </>)
        ) : (<div>Not Found</div>)}

      </div >
    </>
  );
};

export default CardPage;