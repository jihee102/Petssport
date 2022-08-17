import React from 'react';
import styles from './card.module.css';

function Card({ card }) {
  return (
    <div className={styles.card}>
      <section className={styles.cardDetails}>
        <h3 className={styles.cardName}>{card.name}'s passport</h3>
        <img
          className={styles.image}
          src={`./images/${card.fileURL}`}
          alt={card.fileName}
        />
      </section>
      <section className={styles.cardDetails}>
        <span>Name: {card.name}</span>
        <span>Born in {card.birthDate}</span>
        <span>Breed: {card.breed}</span>
        <span>Owner: {card.owner}</span>
      </section>
      <section className={styles.vaccines}>
        <table>
          <tr>
            <th>Vaccine name</th>
            <th>Injection Date</th>
          </tr>
          {card.vaccines.map((vaccine) => (
            <tr>
              <th>{vaccine.name}</th>
              <th>{vaccine.date}</th>
            </tr>
          ))}
        </table>
      </section>
      <img className={styles.stamp} src='./images/stamp.png' alt='Stamp' />
    </div>
  );
}

export default Card;
