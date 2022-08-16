// Import the functions you need from the SDKs you need

import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

class FirebaseAuth {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
    this.facebookProvider = new FacebookAuthProvider();
  }

  login(provider) {
    const authProvider = this.getAuthProvider(provider);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logout() {}

  getAuthProvider(name) {
    switch (name) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      case 'Facebook':
        return this.facebookProvider;
      default:
        throw new Error('Not supported provider');
    }
  }
}

export default FirebaseAuth;
