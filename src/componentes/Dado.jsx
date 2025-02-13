import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './Dado.css'

const Dado = ({ emoji }) => {
  const [image, setImage] = useState(emoji);

  return (
    <div className="dado" onClick={() => setImage('emojiNovo')}> {/* Substitua 'emojiNovo' com a lógica de rolagem */}
      <Icon icon={image} />
    </div>
  );
};

export default Dado;
