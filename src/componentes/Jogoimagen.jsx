import React, { useState } from 'react';
import './Jogoimagen.css';

function Jogoimagen() {
  const emojis = ['😊', '😂', '😍', '😎', '🥺', '🤔', '😜', '🤯', '😈', '😇', '😁', '😘', '😂'];

  function sortearEmoji() {
    const i = Math.floor(Math.random() * emojis.length);
    return emojis[i];
  }

  const [emoji, setEmoji] = useState('');

  function responderClique() {
    setEmoji(sortearEmoji());
  }

  return (
    <div className="container">
      <button onClick={responderClique}>Clique para jogar</button>
      {emoji && <h3>Emoji sorteado: {emoji}</h3>}
    </div>
  );
}

export default Jogoimagen;


