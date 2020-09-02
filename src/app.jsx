import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allReducers from './reducers';
import loggedReducer from './reducers/isLogged';
import { logIn } from './actions';
import { increment } from './actions';
import { decrement } from './actions';

const App = () => {
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch()
  
  const handlePlus = () => {
    dispatch(increment());
  }
  const handleMinus = () => {
    dispatch(decrement());
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button 
        onClick={() => dispatch(logIn())}>
        Log In
      </button>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <h1>{loggedIn ? "You are Logged in" : "You are not logged in"}</h1>
    </div>
  )
}

export default App;
