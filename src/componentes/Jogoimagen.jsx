import React, { useState } from 'react';
import './Jogoimagen.css';

function Jogoimagen() {
  const emojis = ['🚀', '🪐', '🌠', '🌌', '👨‍🚀', '🛸', '🛰️', '👽', '👾', '🤖', '👻', '🎃', '👺', '👹', '💀', '🦇', '🕷️', '🐙', '🦈', '🐠', '🐳', '🐬', '🚢', '🌊', '🏝️', '⚓', '🦀', '🦞', '🐚'];;

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
      
      {emoji && <h3><span onClick={responderClique} className='emoji'>{emoji}</span></h3>}
    </div>
  );
}

export default Jogoimagen;


