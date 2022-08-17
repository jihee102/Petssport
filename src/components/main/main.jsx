import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';
import { useNavigate } from 'react-router-dom';
import CardForm from '../cardForm/cardForm';

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
      <div className={styles.content}>
        <section className={styles.contentContainer}>
          <h1 className={styles.title}>Editor</h1>
        </section>
        <section className={styles.contentContainer}>
          <h1 className={styles.title}>Preview</h1>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
