import React from 'react';
import Header from '../header/header';
import Footer from './../footer/footer';
import styles from './login.module.css';

function Login({ firebaseAuthService, setLogin, isLoggedIn }) {
  const authLogin = (event) => {
    const authService = event.target.textContent;
    firebaseAuthService.login(authService).then((response) => {
      response && setLogin();
    });
  };
  return (
    <div className={styles.loginContainer}>
      <Header isLoggedIn={isLoggedIn} />
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
