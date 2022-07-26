import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import { LikesContextProvider } from './context/LikeContext';


import { Blog } from './components/pages/blog.js'
import { User } from './components/pages/user.js'
import NotFound from './components/pages/not-found';
import { Home } from './components/pages/home';
import UserDetails from './components/data/user-details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LikesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/my-personal-website' element={<App />} >
            <Route path='home' element={<Home />} />
            <Route path='blog' element={<Blog />} />
            <Route path='user' element={<User />}>
              <Route path=':userId' element={<UserDetails />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LikesContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
