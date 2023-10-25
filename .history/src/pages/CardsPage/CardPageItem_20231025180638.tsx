import React, { FC } from 'react';
import { HiMinus } from 'react-icons/hi';
import Button from '../../components/UI/Button/Button';

import 'react-credit-cards-2/dist/lib/styles.scss';

import Cards from 'react-credit-cards-2';
import { ICard } from '../../interfaces/interface';

interface ICardPageItem {
    elem: ICard
}

const CardPageItem: FC<ICardPageItem> = ({elem}) => {
  return (
    <div className='item' key={elem.number}>
    <Cards  cvc={elem.cvc} expiry={elem.expiry} name={elem.name} number={elem.number} />
    <Button color={'pink'} title='Remove' icon={<HiMinus/>} />
  </div>
  );
};

export default CardPageItem;