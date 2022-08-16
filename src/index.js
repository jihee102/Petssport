import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import { firebaseApp } from './service/firebase';
import FirebaseAuth from './service/firebaseAuth';

const firebaseAuthService = new FirebaseAuth(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App firebaseAuthService={firebaseAuthService} />
  </React.StrictMode>
);
