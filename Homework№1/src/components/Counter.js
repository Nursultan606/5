import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, increment10, decrement10, reset } from '../redux/actions';

const Counter = () => {
  const count = useSelector(state => state.counterReducer.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increment10())}>+10</button>
      <button onClick={() => dispatch(decrement10())}>-10</button>
      <button onClick={() => dispatch(reset())}>Сброс</button>
    </div>
  );
};

export default Counter;
