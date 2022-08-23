import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';
import { useNavigate } from 'react-router-dom';
import CardAddForm from '../cardAddForm/cardAddForm';
import CardEditForm from '../cardEditForm/cardEditForm';
import Card from './../card/card';

function Main({ firebaseAuthService }) {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Coco',
      birthDate: '2018-03-24',
      theme: 'blue',
      breed: 'Bichon frise',
      fileName: 'coco',
      fileURL: 'coco.jpeg',
      owner: 'Tim',
      vaccines: [
        { id: '1', name: 'Canine distemper virus', date: '2018-09-11' },
        { id: '2', name: 'Rabies', date: '2019-09-11' },
        { id: '3', name: 'Canine parvovirus', date: '2019-12-11' },
        { id: '4', name: 'Lyme disease', date: '2020-12-11' },
      ],
    },
    2: {
      id: '2',
      name: 'Song',
      birthDate: '2019-06-01',
      theme: 'pink',
      breed: 'Bichon frise',
      fileName: 'Song',
      fileURL: 'coco.jpeg',
      owner: 'Young',
      vaccines: [
        { id: '1', name: 'Canine distemper virus', date: '2019-09-11' },
        { id: '2', name: 'Rabies', date: '2020-09-11' },
      ],
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    firebaseAuthService.onAuthChange((user) => {
      user === null && navigate('/');
    });
  });

  const logout = () => {
    firebaseAuthService.logout();
  };

  const createOrUpdateCard = (card) => {
    const updatedList = { ...cards };
    updatedList[card.id] = card;
    setCards(updatedList);
  };

  const deleteCard = (e, id) => {
    e.preventDefault();
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[id];
      return updated;
    });
  };
  return (
    <div className={styles.mainContainer}>
      <Header logout={logout} />
      <div className={styles.content}>
        <section className={styles.contentContainer}>
          <h1 className={styles.title}>Editor</h1>
          {Object.keys(cards).map((key) => (
            <CardEditForm
              key={'card form' + key}
              card={cards[key]}
              updateCard={createOrUpdateCard}
              deleteCard={deleteCard}
            />
          ))}
          <CardAddForm addCard={createOrUpdateCard} />
        </section>
        <section className={styles.contentContainer}>
          <h1 className={styles.title}>Preview</h1>
          {Object.keys(cards).map((key) => (
            <Card key={'card' + key} card={cards[key]} />
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
