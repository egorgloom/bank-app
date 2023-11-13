import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux';
import { store } from './store';

import Login from './components/FormAuthorization/Login';
import SignUp from './components/FormAuthorization/SignUp';
import Protected from './components/Protected/Protected';

import HomePage from './pages/HomePage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="signup" element={<SignUp />} />
      <Route path="login" index element={<Login />} />
      <Route path="/" element={<Protected />} >
        <Route path="*" index element={<HomePage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
<RouterProvider router={router} />

  </Provider>
);

