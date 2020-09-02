import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged)
    return (
      <div className="App">
        <h1>{counter}</h1>
        <h2>{isLoggedIn}</h2>
      </div>
    );
}

export default App;
