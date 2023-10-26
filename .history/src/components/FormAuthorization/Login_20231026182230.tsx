import { useState } from 'react'
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { FC } from 'react';


import FormAuthorization from './FormAuthorization';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../UI/Button/Button';
import { IAuth } from '../../interfaces/interface';

interface ILogin {

}

const Login: FC<ILogin> = () => {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');

  const { register,handleSubmit, formState: { errors } } = useForm<IAuth>({
    mode: 'onChange'
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

      <form onSubmit={handleSubmit(onSubmit)} >
        <label htmlFor="username">Username</label>
        {/* <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={props.email}
                    onChange={(e) => props.setEmail(e.target.value)}
                    className={styles.input}
                /> */}
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
        // onChange={handleInputChange}


        />
        {/* 
                {errors.email && (<div style={{
                    'color': 'red'
                }}>{errors.email.message}</div>)} */}

        <label htmlFor="username">Password</label>
        <input
          type="password"
          placeholder="Your Password"
          required
        // value={props.password}
        // onChange={(e) => props.setPassword(e.target.value)}
        // className={styles.input}
        />
        {/* <FormAuthorization
        linkForm='/signup'
        titleBtn='Sign in'
        text='Need to Sign up?'
        linkText='Create Account'
        title='Sign in page'
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit} /> */}
                        <Button color='purple' title='signIn' type="submit" />
        </form>
      </>
      )
};

      export default Login;
