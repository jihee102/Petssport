import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';
import { useNavigate } from 'react-router-dom';

function Main({ firebaseAuthService }) {
  const navigate = useNavigate();

  useEffect(() => {
    firebaseAuthService.onAuthChange((user) => {
      user === null && navigate('/');
    });
  });

  const logout = () => {
    firebaseAuthService.logout();
  };

  return (
    <div className={styles.mainContainer}>
      <Header logout={logout} />
      <div className={styles.content}>main content</div>
      <Footer />
    </div>
  );
}

export default Main;
