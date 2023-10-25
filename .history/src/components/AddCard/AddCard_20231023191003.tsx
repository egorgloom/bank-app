import { FC, useState } from 'react';

import styles from './AddCard.module.scss';

import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/lib/styles.scss';
import Button from '../UI/Button/Button';
import { useAddNewCardMutation } from '../API/JsonServer';
import { ICard } from '../../interfaces/interface';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ICardPage { }



const CardPage: FC<ICardPage> = () => {

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });

  const handleInputChange = (evt: any): void => {
    const { name, value } = evt.target;

    setState((prev: any) => ({ ...prev, [name]: value }));
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ICard>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<ICard> = (data) => {

    addNewCard({
      id: data.number, 
      number: data.number, 
      cvc: data.cvc, 
      expiry: data.expiry, 
      name: data.name} as ICard
    )
    reset()
    setState({
      number: '',
      expiry: '',
      cvc: '',
      name: '',
    })

    alert('Successful!')

  }

  const handleReset = () => {
    reset()
  }

  const [addNewCard] = useAddNewCardMutation()




  return (
    <div className={styles.cardPageContainer}>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
      />
      <form className={styles.fromCard} onSubmit={handleSubmit(onSubmit)}>
        <div>
        <input
          {...register('number',
            {
              required: true,
              pattern: {
                value: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                message: 'Enter the 16 digit card number',
              },

            },
          )}
          type='number'
          placeholder='XXXX XXXX XXXX XXXX'
          onChange={handleInputChange}

        />
        {errors.number && (<div style={{
          'color': 'red'
        }}>{errors.number.message}</div>)}
        </div>

        <div>
        <input
          {...register('name',
            {
              required: true,
              pattern: {
                value: /^[a-zA-Z]+[\s|-]?[a-zA-Z]+$/
                ,
                message: 'Enter valid user name',
              },

            },
          )}
          type='name'
          placeholder='User Name'
          onChange={handleInputChange}

        />
        {errors.name && (<div style={{
          'color': 'red'
        }}>{errors.name.message}</div>)}
        </div>

        <div>
        <input
          {...register('cvc',
            {
              required: true,
              pattern: {
                value: /^(0?[0-9]{3})$/
                ,
                message: 'Enter valid cvc',
              },

            },
          )}
          type='number'
          placeholder='CVC'
          onChange={handleInputChange}

        />
        {errors.cvc && (<div style={{
          'color': 'red'
        }}>{errors.cvc.message}</div>)}
        </div>

        <div>
        <input
          {...register('expiry',
            {
              required: true,
              pattern: {
                value: /^(0?[0-9]{4})$/
                ,
                message: 'Enter valid expiry',
              },

            },
          )}
          type='number'
          placeholder='Expiry'
          onChange={handleInputChange}

        />
        {errors.expiry && (<div style={{
          'color': 'red'
        }}>{errors.expiry.message}</div>)}
        </div>
        <Button color={'purple'} title='Add Card' type='submit'/>
        <Button color={'gray'} title='Reset' onClick={handleReset}/>
      </form>
    </div>
  );
};

export default CardPage;