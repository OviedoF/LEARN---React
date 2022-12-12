import './App.css';
import React, { useState } from 'react';
import States from './components/States';
import Effect from './components/Effect';

function App() {

  return (
    <div className="App" style={{color: 'white', padding: '10px 40px'}}>
      <States />

      <Effect />
    </div>
  );
};

export default App;