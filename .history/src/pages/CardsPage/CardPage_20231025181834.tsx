import { FC } from 'react';

import { useGetCardQuery, useRemoveCardMutation } from '../../components/API/JsonServer';
import Loading from '../../components/UI/Loading/Loading';


import 'react-credit-cards-2/dist/lib/styles.scss';

import Cards from 'react-credit-cards-2';
import Button from '../../components/UI/Button/Button';

import { HiMinus } from 'react-icons/hi'
import { ICard } from '../../interfaces/interface';
import CardPageItem from './CardPageItem';



interface ICardPage {


 }

const CardPage: FC<ICardPage> = () => {

  const { data, isLoading } = useGetCardQuery('');

  const [removeCard] = useRemoveCardMutation()

  
  const handleRemove = (card: ICard) => {
    removeCard(card)
  }

  return (
    <>
      <div className='cardsPage'>
        {isLoading ? (<Loading title='Loading...' />) : data ? (
          data.map((elem: any) =>
          <CardPageItem key={elem.id} {...elem} remove={handleRemove} elem={elem}/>)
        ) : (<div>Not Found</div>)}
      </div >
    </>
  );
};

export default CardPage;