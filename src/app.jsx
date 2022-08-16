import { useState } from 'react';
import styles from './app.module.css';
import Login from './components/login/login';

function App({ firebaseAuthService }) {
  const [login, setLogin] = useState(false);
  const loggedIn = () => {
    setLogin(true);
  };
  return (
    <div className={styles.app}>
      <Login
        firebaseAuthService={firebaseAuthService}
        setLogin={loggedIn}
        isLoggedIn={login}
      />
    </div>
  );
}

export default App;
