import React from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './components/friends';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React Express Starter</h1>
      </header> */}
      <Friends />
    </div>
  );
}

export default App;
