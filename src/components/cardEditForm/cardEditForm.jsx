import React, { useState, useRef } from 'react';
import styles from './cardEditForm.module.css';

function CardEditForm({ FileInput, card, updateCard, deleteCard }) {
  const [vaccines, setVaccines] = useState(card ? card.vaccines : []);
  const nameRef = useRef();
  const breedRef = useRef();
  const birthDateRef = useRef();
  const ownerRef = useRef();
  const vNameRef = useRef();
  const vDateRef = useRef();

  const onChange = (e) => {
    if (e.currentTarget === null) {
      return;
    }

    e.preventDefault();
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const updateVaccine = (e, id) => {
    setVaccines(
      vaccines.map((v) =>
        v.id === id
          ? { ...v, [e.currentTarget.name]: e.currentTarget.value }
          : v
      )
    );
    updateCard({
      ...card,
      vaccines: [...vaccines],
    });
  };

  const deleteVaccine = (e, id) => {
    e.preventDefault();
    setVaccines(vaccines.filter((v) => v.id !== id));
    updateCard({ ...card, vaccines: vaccines });
  };

  const saveVaccine = (e) => {
    e.preventDefault();
    setVaccines([
      ...vaccines,
      {
        id: `v${Date.now()}`,
        name: vNameRef.current.value,
        date: vDateRef.current.value,
      },
    ]);
    vNameRef.current.value = '';
    vDateRef.current.value = '';
  };

  const onFileChange = (link) => {
    updateCard({
      ...card,
      fileURL: link,
    });
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.name}
        type='text'
        placeholder='Name'
        name='name'
        value={card && card.name}
        ref={nameRef}
        onChange={onChange}
      />

      <input
        className={styles.breed}
        type='text'
        placeholder='Breed'
        name='breed'
        ref={breedRef}
        value={card && card.breed}
        onChange={onChange}
      />
      <div className={styles.birthDate}>
        <span>Born in</span>
        <input
          type='date'
          placeholder='Birth Date'
          name='birthDate'
          ref={birthDateRef}
          value={card && card.birthDate}
          onChange={onChange}
        />
      </div>
      <input
        className={styles.owner}
        type='text'
        placeholder='Owner Name'
        name='owner'
        ref={ownerRef}
        value={card && card.owner}
        onChange={onChange}
      />
      <div className={styles.vaccineContiner}>
        <span className={styles.vaccineTitle}>Vaccine Information</span>
        {vaccines.map((v, index) => (
          <div key={index} className={styles.vaccinInput}>
            <input
              className={styles.vaccineName}
              type='text'
              placeholder='Vaccine Name'
              name='name'
              value={v.name}
              onChange={(e) => updateVaccine(e, v.id)}
            />
            <input
              className={styles.vaccineDate}
              type='date'
              name='date'
              value={v.date}
              onChange={(e) => updateVaccine(e, v.id)}
            />
            <button
              className={styles.deleteBtn}
              onClick={(e) => deleteVaccine(e, v.id)}
            >
              Delete
            </button>
          </div>
        ))}
        <div className={styles.vaccinInput}>
          <input
            className={styles.vaccineName}
            type='text'
            placeholder='Vaccine Name'
            name='name'
            ref={vNameRef}
          />
          <input
            className={styles.vaccineDate}
            type='date'
            name='date'
            ref={vDateRef}
          />
          <button className={styles.deleteBtn} onClick={saveVaccine}>
            Save
          </button>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={`${styles.fileBtn} + ${card.fileURL && styles.filled}`}>
          <FileInput onFileChange={onFileChange} name={card.fileName || ''} />
        </div>
        <button
          className={styles.addBtn}
          onClick={(e) => deleteCard(e, card.id)}
        >
          Delete{' '}
        </button>
      </div>
    </form>
  );
}

export default CardEditForm;
