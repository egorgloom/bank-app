import { FC } from 'react';

import { useState } from 'react'

import { auth } from '../../../firebase';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

import FormAuthorization from './FormAuthorization';



interface ISignUp { }

const SignUp: FC<ISignUp> = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
      <FormAuthorization
        linkForm='/login'
        titleBtn='Sign up'
        text='Need to Login?'
        linkText='Login'
        title='Sign up page'
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit} />
    </>
  )
};

export default SignUp;
