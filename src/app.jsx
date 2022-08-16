import { useState } from 'react';
import './app.css';
import Login from './components/login/login';
import { googleLogin } from './service/firebaseAuth';

function App({ firebaseAuthService }) {
  const [login, setLogin] = useState(false);
  return (
    <>
      <Login firebaseAuthService={firebaseAuthService} />
    </>
  );
}

export default App;
