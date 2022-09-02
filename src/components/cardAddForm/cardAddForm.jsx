import React, { useState, useRef } from 'react';
import styles from './cardAddForm.module.css';

function CardAddForm({ FileInput, addCard }) {
  const [vaccines, setVaccines] = useState([]);
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const formRef = useRef();
  const nameRef = useRef();
  const breedRef = useRef();
  const birthDateRef = useRef();
  const ownerRef = useRef();
  const vNameRef = useRef();
  const vDateRef = useRef();

  const saveVaccine = (e) => {
    e.preventDefault();
    const vaccine = {
      id: `v${Date.now()}`,
      name: vNameRef.current.value,
      date: vDateRef.current.value,
    };
    vNameRef.current.value = '';
    vDateRef.current.value = '';
    setVaccines([...vaccines, vaccine]);
  };

  const updateVaccine = (e, id) => {
    setVaccines(
      vaccines.map((v) =>
        v.id === id
          ? { ...v, [e.currentTarget.name]: e.currentTarget.value }
          : v
      )
    );
  };

  const deleteVaccine = (e, id) => {
    e.preventDefault();
    setVaccines(vaccines.filter((v) => v.id !== id));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      breed: breedRef.current.value || '',
      birthDate: birthDateRef.current.value || '',
      owner: ownerRef.current.value || '',
      fileName: nameRef.current.value || '',
      fileURL: file.fileURL || '',
      vaccines: [...vaccines],
    };
    formRef.current.reset();
    setVaccines([]);
    setFile({ fileName: null, fileURL: null });
    addCard(card);
  };

  const onFileChange = (file) => {
    setFile({
      fileName: nameRef.current.value || 'No named image',
      fileURL: file.url,
    });
  };
  return (
    <form className={styles.form} ref={formRef}>
      <input
        ref={nameRef}
        className={styles.name}
        type='text'
        placeholder='Name'
        name='name'
      />

      <input
        ref={breedRef}
        className={styles.breed}
        type='text'
        placeholder='Breed'
        name='breed'
      />
      <div className={styles.birthDate}>
        <span>Born in</span>
        <input
          ref={birthDateRef}
          type='date'
          placeholder='Birth Date'
          name='birthDate'
        />
      </div>
      <input
        ref={ownerRef}
        className={styles.owner}
        type='text'
        placeholder='Owner Name'
        name='owner'
      />
      <div className={styles.vaccineContiner}>
        <span className={styles.vaccineTitle}>Vaccine Information</span>
        {vaccines.map((v) => (
          <div className={styles.vaccinInput} key={v.id}>
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
              value={v.date}
              type='date'
              name='date'
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
            ref={vNameRef}
            className={styles.vaccineName}
            type='text'
            placeholder='Vaccine Name'
            name='vName'
          />
          <input
            ref={vDateRef}
            className={styles.vaccineDate}
            type='date'
            name='vDate'
          />
          <button className={styles.deleteBtn} onClick={saveVaccine}>
            Add
          </button>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.fileBtn}>
          <FileInput onFileChange={onFileChange} name={file.fileName} />
        </div>
        <button className={styles.addBtn} onClick={onSubmit}>
          Add
        </button>
      </div>
    </form>
  );
}

export default CardAddForm;
