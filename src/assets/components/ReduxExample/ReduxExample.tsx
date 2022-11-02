import React from 'react';
import Layout from '../Layout/Layout';
import styles from './ReduxExample.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const ReduxExample = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const statement1 = useSelector((state) => state.statement1);

  const decrementValue = () => {
    dispatch({ type: 'DECREMENT_STATE', payload: 10 });
  };
  const incrementValue = () => {
    dispatch({ type: 'INCREMENT_STATE', payload: 10 });
  };

  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <button className={styles.example} onClick={() => decrementValue()}>
          DECREMENT
        </button>
        <button className={styles.example} onClick={() => incrementValue()}>
          INCREMENT
        </button>
      </div>

      <div style={{ fontSize: '3rem' }}>Current count: {statement1}</div>
    </Layout>
  );
};

export default ReduxExample;
