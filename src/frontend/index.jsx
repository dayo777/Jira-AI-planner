// front-end code goes here
import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text } from '@forge/react';
import { invoke } from '@forge/bridge';
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from './store/auth.jsx'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <App/>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName = "toastBody"
      />
    </React.StrictMode>,
  </AuthProvider>
)

ForgeReconciler.render(
  <React.StrictMode>
    <App />
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName = "toastBody"
      />
  </React.StrictMode>
);
