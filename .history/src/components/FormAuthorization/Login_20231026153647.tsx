import { useState } from 'react'
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { FC } from 'react';


import FormAuthorization from './FormAuthorization';

interface ILogin {

}

const Login: FC<ILogin> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.uid); //login
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/summary");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <FormAuthorization
        linkForm='/signup'
        titleBtn='Sign in'
        text='Need to Sign up?'
        linkText='Create Account'
        title='Sign in page'
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit} />
    </>
  )
};

export default Login;
