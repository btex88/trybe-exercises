import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import styles from '../styles/Card.module.css';

const Card = ({ colors, index, previous, next }) => {
  return (
    <div className={styles.container}>
      <h1
        style={{
          backgroundColor: colors[index],
          color: colors[index - 1],
        }}
      >
        Color:
        <br />
        <span>{colors[index]}</span>
      </h1>
      <Button clickFn={previous} name="Previous color" />
      <Button clickFn={next} name="Next color" />
    </div>
  );
};

const mapStateProps = ({ changeColor: { colors, index } }) => ({
  colors,
  index,
});

const mapDispatchProps = (dispatch) => ({
  previous: () => dispatch({ type: 'PREVIOUS_COLOR' }),
  next: () => dispatch({ type: 'NEXT_COLOR' }),
});

export default connect(mapStateProps, mapDispatchProps)(Card);
