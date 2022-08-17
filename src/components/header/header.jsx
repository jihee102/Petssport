import React from 'react';
import styles from './header.module.css';

function Header({ logout }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logoImage} src='./images/logo.png' alt='logo' />
        <h1 className={styles.logo}>Petssport</h1>
      </div>
      {logout && (
        <button className={styles.button} onClick={logout}>
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;
