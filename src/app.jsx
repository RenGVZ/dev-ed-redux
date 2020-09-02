import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logIn } from './actions';

const App = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.logIn)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <button onClick={() => dispatch(logIn())}>{ loggedIn ? "Log Out" : "Log In" }</button>
      <h1>{ loggedIn ? "You are logged IN" : "You are logget OUT" }</h1>
    </div>
  )
}

export default App;
