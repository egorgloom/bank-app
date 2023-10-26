import { useState } from 'react'
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

import { FC } from 'react';

import styles from './FormAuthorization.module.scss'

import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../UI/Button/Button';
import { IAuth } from '../../interfaces/interface';

interface ILogin {

}

const Login: FC<ILogin> = () => {


  const { register, handleSubmit, formState: { errors } } = useForm<IAuth>({
    mode: 'onSubmit'
  })

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IAuth> = async (data) => {
    // e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log(userCredential);
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
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label htmlFor="username" className={styles.label}>Username</label>
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
          {/* 
                {errors.email && (<div style={{
                    'color': 'red'
                }}>{errors.email.message}</div>)} */}

          <label htmlFor="username" className={styles.label}>Password</label>

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
          <Button color='purple' title='signIn' type="submit" />
          
        </form>
        <p>Need to Signup? <Link to='/signup'>Create Account</Link></p>
      </div>
    </>
  )
};

export default Login;
