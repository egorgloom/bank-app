import { FC } from 'react';

import { useGetCardQuery } from '../../components/API/JsonServer';
import Loading from '../../components/UI/Loading/Loading';


import 'react-credit-cards-2/dist/lib/styles.scss';

import Cards from 'react-credit-cards-2';
import Button from '../../components/UI/Button/Button';

import { HiMinus } from 'react-icons/hi'
import { ICard } from '../../interfaces/interface';



interface ICardPage {
  remove: (card: ICard) => void,
 }

const CardPage: FC<ICardPage> = ({remove}) => {

  const { data, isLoading } = useGetCardQuery('');

  


  return (
    <>
      <div className='cardsPage'>
        {isLoading ? (<Loading title='Loading...' />) : data ? (
          data.map((elem: any) =>
            <div className='item' key={elem.number}>
              <Cards  cvc={elem.cvc} expiry={elem.expiry} name={elem.name} number={elem.number} />
              <Button color={'pink'} title='Remove' icon={<HiMinus/>}/>
              <button onClick={remove(card)}>remove</button>
            </div>)
        ) : (<div>Not Found</div>)}

      </div >
    </>
  );
};

export default CardPage;