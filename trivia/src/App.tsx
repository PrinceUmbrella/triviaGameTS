import React from 'react';
import './App.css';
import Score from './components/Score';
import Questions from './components/Questions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Score/>
        <Questions/>
      </header>
    </div>
  );
}

export default App;
