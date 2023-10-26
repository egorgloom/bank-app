// // import ReactDOM from 'react-dom/client'

// // import App from './App'

// // import './index.scss'

// // import SignUp from './components/FormAuthorization/SignUp';
// // import Login from './components/FormAuthorization/Login';
// // import Protected from './components/Protected/Protected'
// // import HomePage from './pages/HomePage'

// // import {
// //   createBrowserRouter,
// //   createRoutesFromElements,
// //   RouterProvider,
// //   Route,
// // } from "react-router-dom";



// // const router = createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route path="/" element={<App />}>
// //       <Route path="signup" element={<SignUp />} />
// //       <Route path="login" element={<Login />} />
// //       <Route path="/" element={<Protected />} >
// //         <Route path="/" element={<HomePage />} />
// //       </Route>
// //     </Route>
// //   )
// // );

// // ReactDOM.createRoot(document.getElementById('root')!).render(

// //   <RouterProvider router={router} />
// // )

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App'
// import './index.scss'
// import { store } from './store'

// //Возможно нжно  <ApiProvider api={apiSlice}>
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <BrowserRouter> 
//    <React.StrictMode>
//     <Provider store={store}> 
//           <App />
//     </Provider>

//   </React.StrictMode>
//   </BrowserRouter>
// ,
// )

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
// import './index.css'


// import '../firebase'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>

//   </React.StrictMode>,
// )


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
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Protected />} >
        <Route path="/summary/*" index element={<HomePage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
<RouterProvider router={router} />

  </Provider>
);

