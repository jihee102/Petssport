import styles from './app.module.css';
import Login from './components/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main/main';

function App({ firebaseAuthService, database }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={<Login firebaseAuthService={firebaseAuthService} />}
          />
          <Route
            path='app'
            element={
              <Main
                firebaseAuthService={firebaseAuthService}
                database={database}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
