// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App'
// import './index.scss'


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <BrowserRouter> 
//    <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </BrowserRouter>
// ,
// )

import ReactDOM from 'react-dom/client'

import App from './App'

import './index.scss'

// import SignUp from './components/FormAuthorization/SignUp';
// import Login from './components/FormAuthorization/Login';



import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Protected from './components/Protected/Protected'
import HomePage from './pages/HomePage'
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Protected />} >
        <Route path="/" element={<HomePage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(

  <RouterProvider router={router} />
)