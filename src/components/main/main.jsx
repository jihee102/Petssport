import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';
import { useNavigate } from 'react-router-dom';
import CardForm from '../cardForm/cardForm';
import Card from './../card/card';

function Main({ firebaseAuthService }) {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Coco',
      birthDate: '2018-03-24',
      theme: 'blue',
      breed: 'Bichon frise',
      fileName: 'coco',
      fileURL: 'coco.jpeg',
      owner: 'Tim',
      vaccines: [
        { name: 'Canine distemper virus', date: '2018-09-11' },
        { name: 'Rabies', date: '2019-09-11' },
        { name: 'Canine parvovirus', date: '2019-12-11' },
        { name: 'Lyme disease', date: '2020-12-11' },
      ],
    },
    {
      id: '2',
      name: 'Song',
      birthDate: '2019-06-01',
      theme: 'pink',
      breed: 'Bichon frise',
      fileName: 'Song',
      fileURL: 'coco.jpeg',
      owner: 'Young',
      vaccines: [
        { name: 'Canine distemper virus', date: '2019-09-11' },
        { name: 'Rabies', date: '2020-09-11' },
      ],
    },
  ]);
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
          {cards.map((card) => (
            <CardForm card={card} />
          ))}
        </section>
        <section className={styles.contentContainer}>
          <h1 className={styles.title}>Preview</h1>
          {cards.map((card) => (
            <Card card={card} />
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
