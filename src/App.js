import React from 'react';
// import logo from './logo.svg';
import { TeamBoard } from './features/teamBoard/TeamBoard';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <TeamBoard />
      </header>
    </div>
  );
}

export default App;
