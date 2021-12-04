import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ clickFn, name }) => {
  return (
    <button onClick={clickFn} className={styles.button}>
      {name}
    </button>
  );
};

export default Button;
