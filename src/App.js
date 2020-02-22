import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const state = {
    input: ''
  }

  console.log("hello world")

  return (

    <div>
      {
        ['cat', 'dog', 'bird'].map(animal => {
          return <p>{animal}</p>;
        })
      }
      <input type="text" value={state.input} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
