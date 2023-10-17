import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';



const Protected: FC = () => {
    const token = localStorage.getItem('token');

    return (
      token ? <Outlet /> : <Navigate to="/login" />
    )

};

export default Protected;