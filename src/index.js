import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import { firebaseApp, database } from './service/firebase';
import FirebaseAuth from './service/firebaseAuth';
import ImageUploader from './service/imageUploader';
import ImageFileInput from './components/imageFileInput/imageFileInput';

const firebaseAuthService = new FirebaseAuth(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      firebaseAuthService={firebaseAuthService}
      database={database}
      FileInput={FileInput}
    />
  </React.StrictMode>
);
