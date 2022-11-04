import React, { useRef } from 'react';
import Layout from '../Layout/Layout';
import styles from './ReduxExample.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const ReduxExample = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const statement1 = useSelector((state) => state.first.statement1);
  // @ts-ignore
  const testArray = useSelector((state) => state.second.sampleArray);

  const decrementValue = () => {
    dispatch({ type: 'DECREMENT_STATE', payload: 10 });
  };
  const incrementValue = () => {
    dispatch({ type: 'INCREMENT_STATE', payload: 10 });
  };

  const textInput = useRef(null);

  const addText = () => {
    // @ts-ignore
    dispatch({ type: 'ADD_ITEM', payload: textInput.current.value });
  };

  const clearText = () => {
    dispatch({ type: 'CLEAR_ALL_ITEMS', payload: 0 });
  };

  return (
    <Layout>
      <div style={{ display: 'flex', margin: '10px 0' }}>
        <button className={styles.example} onClick={() => decrementValue()}>
          DECREMENT
        </button>
        <button className={styles.example} onClick={() => incrementValue()}>
          INCREMENT
        </button>
      </div>

      <div style={{ fontSize: '3rem' }}>Current count: {statement1}</div>

      <div style={{ display: 'flex', margin: '10px 0' }}>
        <button className={styles.example} onClick={() => addText()}>
          Add text
        </button>
        <button className={styles.example} onClick={() => clearText()}>
          Clear all text
        </button>
        <input type={'text'} ref={textInput} />
      </div>

      <div>
        Current text:{' '}
        {testArray.map((e: any, index: number) => (
          <p key={index}>{e}</p>
        ))}
      </div>
    </Layout>
  );
};

export default ReduxExample;
