import React from 'react';
import Header from '../header/header';
import Footer from './../footer/footer';
import styles from './login.module.css';

function Login({ firebaseAuthService }) {
  const authLogin = (event) => {
    const authService = event.target.textContent;
    firebaseAuthService.login(authService).then(console.log);
  };
  return (
    <div className={styles.login}>
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
    </div>
  );
}

export default Login;
