import React from 'react';
import styles from './header.module.css';

function Header({ isLoggedIn }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logoImage} src='./images/logo.png' alt='logo' />
        <h1 className={styles.logo}>Petssport</h1>
      </div>
      {isLoggedIn && <button className={styles.button}>Logout</button>}
    </header>
  );
}

export default Header;
