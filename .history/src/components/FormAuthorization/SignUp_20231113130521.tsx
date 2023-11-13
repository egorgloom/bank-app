import { FC } from 'react';

import styles from './FormAuthorization.module.scss'

import { auth } from '../../../firebase';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Link, useNavigate } from 'react-router-dom';


import { IAuth } from '../../interfaces/interface';

import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '../UI/Button/Button';



interface ISignUp { }

const SignUp: FC<ISignUp> = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IAuth>({
    mode: 'onSubmit'
  })

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IAuth> = async (data) => {

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      localStorage.setItem('token', user.uid); //login
      localStorage.setItem('user', JSON.stringify(user));
      navigate("*");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className={styles.formContainer}>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label className={styles.label}>E-mail</label>
          <input
            {...register('email',
              {
                required: true,
                pattern: {
                  value: /.+@[^@]+\.[^@]{2,}$/,
                  message: 'Enter valid e-mail'
                },
              },
            )}
            type='email'
            placeholder='E-mail'
            className={styles.input}
          />
          {errors.email && (<div style={{
            'color': 'red'
          }}>{errors.email.message}</div>)}
          <label className={styles.label}>Password</label>
          <input
            {...register('password',
              {
                required: true,
                pattern: {
                  value: /^(0?[0-9]{6})$/,
                  message: 'Enter valid password'
                },
              },
            )}
            type='password'
            placeholder='Password'
            className={styles.input}
          />
          {errors.password && (<div style={{
            'color': 'red'
          }}>{errors.password.message}</div>)}
          <Button color='purple' title='Sign up' type="submit" />
          <p>Need to Login? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </>
  )
};

export default SignUp;
