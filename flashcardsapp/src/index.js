import React from 'react';
import ReactDOM from 'react-dom/client';
import APIContext from './apiContext';
import service from './service';
import router from './router';
import {RouterProvider} from 'react-router-dom';

const api = new service();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APIContext.Provider value={api}>
      <RouterProvider router={router} />
    </APIContext.Provider>
  </React.StrictMode>
);