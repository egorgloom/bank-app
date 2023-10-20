import ReactDOM from 'react-dom/client'

import App from './App'

import './index.scss'

import SignUp from './components/FormAuthorization/SignUp';
import Login from './components/FormAuthorization/Login';
import Protected from './components/Protected/Protected'
import HomePage from './pages/HomePage'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="signup" element={<SignUp />} />
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