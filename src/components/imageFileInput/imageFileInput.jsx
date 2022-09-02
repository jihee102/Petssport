import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useState } from 'react';
import styles from './imageFileInput.module.css';

function ImageFileInput({ imageUploader, name, onFileChange }) {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const result = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange(result);
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        name='file'
        className={styles.input}
        onChange={onChange}
      />
      {loading ? (
        <div className={styles.loading}></div>
      ) : (
        <button className={styles.button} onClick={onButtonClick}>
          {name || 'No File'}
        </button>
      )}
    </div>
  );
}

export default ImageFileInput;
