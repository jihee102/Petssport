import React, { useState } from 'react';
import ImageFileInput from '../imageFileInput/imageFileInput';
import styles from './cardEditForm.module.css';

function CardEditForm({ card }) {
  const [vaccines, setVaccines] = useState(card ? card.vaccines : []);

  const addVaccineColumn = (e) => {
    e.preventDefault();
    setVaccines([...vaccines, { name: '' }]);
  };

  const detailUpdated = (e) => {
    console.log(e.target.name);
    if (e.target.name === 'vName' || e.target.name === 'vDate') {
    } else {
    }
  };

  const deleteVaccine = (e, id) => {
    console.log(id);
    e.preventDefault();
    setVaccines(vaccines.filter((v) => v.id !== id));
  };

  const deleteCard = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.name}
        type='text'
        placeholder='Name'
        name='name'
        value={card && card.name}
        onChange={detailUpdated}
      />

      <input
        className={styles.breed}
        type='text'
        placeholder='Breed'
        name='breed'
        value={card && card.breed}
        onChange={detailUpdated}
      />
      <div className={styles.birthDate}>
        <span>Born in</span>
        <input
          type='date'
          placeholder='Birth Date'
          name='birthDate'
          value={card && card.birthDate}
          onChange={detailUpdated}
        />
      </div>
      <input
        className={styles.owner}
        type='text'
        placeholder='Owner Name'
        name='owner'
        value={card && card.owner}
        onChange={detailUpdated}
      />
      <div className={styles.vaccineContiner}>
        <span className={styles.vaccineTitle}>Vaccine Information</span>
        {vaccines.map((v, index) => (
          <div key={index} className={styles.vaccinInput}>
            <input
              className={styles.vaccineName}
              type='text'
              placeholder='Vaccine Name'
              name='vName'
              value={v.name}
              onChange={detailUpdated}
            />
            <input
              className={styles.vaccineDate}
              type='date'
              name='vDate'
              value={v.date}
              onChange={detailUpdated}
            />
            <button
              className={styles.deleteBtn}
              onClick={(e) => deleteVaccine(e, v.id)}
            >
              Delete
            </button>
          </div>
        ))}
        <button className={styles.addVaccineBtn} onClick={addVaccineColumn}>
          +
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.fileBtn}>
          <ImageFileInput />
        </div>
        <button className={styles.addBtn} onClick={deleteCard}>
          Delete{' '}
        </button>
      </div>
    </form>
  );
}

export default CardEditForm;
