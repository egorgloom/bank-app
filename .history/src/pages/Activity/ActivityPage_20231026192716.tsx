import { FC } from 'react';


import { signOut } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import { auth } from './../../../firebase';

interface IActivityPage {}

const ActivityPage: FC<IActivityPage> = () => {

    const user = JSON.parse(localStorage.getItem('user') !);
    const navigate = useNavigate();
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    }
  return (
    <div>

    <h2>{user.email}</h2>
    <button onClick={handleLogout}>Logout</button>
  </div>
  );
};

export default ActivityPage;