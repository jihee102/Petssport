import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from './../footer/footer';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

function Login({ firebaseAuthService }) {
  const navigate = useNavigate();

  const goToMain = (userId) => {
    navigate('/app', { state: { id: userId } });
  };

  const authLogin = (event) => {
    const authService = event.target.textContent;
    firebaseAuthService
      .login(authService)
      .then((response) => {
        response.operationType === 'signIn' && goToMain(response.user.uid);
      })
      .catch((err) => console.err(err));
  };

  useEffect(() => {
    firebaseAuthService.onAuthChange((user) => {
      user && goToMain(user.uid);
    });
  });
  return (
    <div className={styles.loginContainer}>
      <Header />
      <div className={styles.authButtons}>
        <h2 className={styles.loginLetter}>Login</h2>
        <button className={styles.button} onClick={authLogin}>
          Google
        </button>
        <button className={styles.button} onClick={authLogin}>
          Github
        </button>
        <button className={styles.button} onClick={authLogin}>
          Facebook
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
