// src/App.js
import React, { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState('');

  const handleMove = (move) => {
    // Envia a jogada ao servidor para validação
    fetch('/api/move', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ move }),
    })
    .then(response => response.json())
    .then(data => setFeedback(data.message));
  };

  return (
    <div>
      <h1>Trainer de Poker</h1>
      <button onClick={() => handleMove('raise')}>Raise</button>
      <button onClick={() => handleMove('call')}>Call</button>
      <button onClick={() => handleMove('fold')}>Fold</button>
      <div>{feedback}</div>
    </div>
  );
}

export default App;